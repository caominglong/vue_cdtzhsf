<!-- 下拉刷新 上拉加载组件 -->
<template>
  <div
    class="com-scroll"
    :class="{down:(state===0),up:(state==1),refresh:(state===2),touch:touching}"
    @touchstart="touchStart($event)"
    @touchmove="touchMove($event)"
    @touchend="touchEnd($event)"
    @scroll="(onInfinite || infiniteLoading) ? onScroll($event) : undefined"
  >
    <section
      class="inner"
      :style="{ transform: 'translate3d(0, ' + top + 'px, 0)' }"
    >
      <header class="pull-refresh">
        <slot name="pull-refresh">
          <span class="down-tip">下拉更新</span>
          <span class="up-tip">松开更新</span>
          <span class="refresh-tip">更新中……</span> 
        </slot>
      </header>
      <slot></slot>
      <div class="load-more">
        <slot
          name="load-more"
          v-if="scrollType == 'loading'"
        >
          <load-more tip="正在加载"></load-more>
        </slot>

        <slot
          name="load-more"
          v-if="scrollType == 'noMore'"
        > 
          <load-more
            :show-loading="false"
            tip="已经到底啦~"
            background-color="#fbf9fe"
          ></load-more>
        </slot>

        <slot
          name="load-more"
          v-if="scrollType == 'noData'"
        >
          <load-more
            :show-loading="false"
            tip="暂无数据"
            background-color="#fbf9fe"
          ></load-more>
        </slot>
      </div>
    </section>
  </div>
</template>
 
<script>
import { LoadMore } from "vux";
export default {
  components: {
    LoadMore
  },
  props: {
    offset: {
      type: Number,
      default: 40
    },
    loadingText: {
      type: String,
      default: "加载中..."
    },
    enableInfinite: {
      type: Boolean,
      default: true
    },
    enableRefresh: {
      type: Boolean,
      default: true
    },
    onRefresh: {
      type: Function,
      default: undefined,
      required: false
    },
    onInfinite: {
      type: Function,
      default: undefined,
      require: false
    },
    scrollType: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      top: 0,
      state: 0,
      startY: 0,
      touching: false,
      infiniteLoading: false
    };
  },
  methods: {
    touchStart(e) {
      this.startY = e.targetTouches[0].pageY;
      this.startScroll = this.$el.scrollTop || 0;
      this.touching = true;
    },
    touchMove(e) {
      if (!this.enableRefresh || this.$el.scrollTop > 0 || !this.touching) {
        return;
      }
      let diff = e.targetTouches[0].pageY - this.startY - this.startScroll;
      if (diff > 0) e.preventDefault();
      this.top = Math.pow(diff, 0.8) + (this.state === 2 ? this.offset : 0);

      if (this.state === 2) {
        return;
      }
      if (this.top >= this.offset) {
        this.state = 1;
      } else {
        this.state = 0;
      }
    },
    touchEnd(e) {
      if (!this.enableRefresh) return;
      this.touching = false;
      if (this.state === 2) {
        this.state = 2;
        this.top = this.offset;
        return;
      }
      if (this.top >= this.offset) {
        this.refresh();
      } else {
        this.state = 0;
        this.top = 0;
      }
    },
    refresh() {
      this.state = 2;
      this.top = this.offset;
      this.onRefresh(this.refreshDone);
    },
    refreshDone() {
      this.state = 0;
      this.top = 0;
      this.infiniteLoading = false;
    },

    infinite() {
      this.infiniteLoading = true;
      this.onInfinite(this.infiniteDone);
    },

    infiniteDone() {
      this.infiniteLoading = false;
    },

    onScroll(e) {
      if (!this.enableInfinite || this.infiniteLoading) {
        return;
      }
      let outerHeight = this.$el.clientHeight;
      let innerHeight = this.$el.querySelector(".inner").clientHeight;
      let scrollTop = this.$el.scrollTop;
      let ptrHeight = this.onRefresh
        ? this.$el.querySelector(".pull-refresh").clientHeight
        : 0;
      let infiniteHeight = this.$el.querySelector(".load-more").clientHeight;
      let bottom = innerHeight - outerHeight - scrollTop - ptrHeight;
      if (bottom < infiniteHeight) this.infinite();
    }
  }
}; 
</script>
<style lang="less" scoped>
.com-scroll {
  position: absolute;
  top: 0px;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  .inner {
    position: absolute;
    top: -2rem;
    width: 100%;
    transition-duration: 300ms;
  }
  .pull-refresh {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
 .load-more {
    color: #808080;
  }
}
.com-scroll.touch .inner {
  transition-duration: 0ms;
}
.com-scroll.down .down-tip {
  display: block;
}
.com-scroll.up .up-tip {
  display: block;
}
.com-scroll.refresh .refresh-tip {
  display: block;
}
.com-scroll .down-tip,
.com-scroll .refresh-tip,
.com-scroll .up-tip {
  display: none;
}
</style>
