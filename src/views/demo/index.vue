<!-- 页面模板 -->
<template>
  <div id="Demo">
    <x-header :left-options="{showBack: false}">列表Demo
      <router-link to="/DemoSearch" tag="i" class="fa fa-search fa-lg" slot="right">
      </router-link>
    </x-header> 
    <div class="tab-item">
      <com-scroll
        :on-refresh="$_scrollMixin_onRefresh"
        :on-infinite="$_scrollMixin_onInfinite"
        :scrollType="scrollType"
      >
        <ComCell v-for="item, index in listData" :key="'1-' + index">
          <span slot="title">{{ item.title }}</span>
          <span slot="time">{{ item.time | filter_dateFormat }}</span>
        </ComCell>
      </com-scroll>
    </div>
  </div>
</template>
<script>
import { XHeader } from "vux";
import { scrollMixin } from "@/mixins/scroll-mixin.js";
import { demoService } from "@/api/service";
import { mapGetters } from 'vuex'
export default { 
  name: "Demo",
  components: {
    XHeader,
  },
  data() {
    return {
      searchForm: {
        pageSize: 10,
        pageNo: 1
      }
    };
  }, 
  directives: {},
  computed: {
    ...mapGetters(['StoreSearchForm']),
  },
  mixins: [scrollMixin],
  watch: {
    StoreSearchForm: {
      handler (val) {
        for (let i in val) {
          this.searchForm[i] = val[i]
        }
        this.fetchData()
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    // 获取数据
    // type值： loading：加载中; noData: 暂无数据； noMore：已经到底了，没有更多数据
    fetchData(type) {
      this.$_scrollMixin_fetchData(type, demoService); // demoService 定义的接口
    },

    // 
  },

  // 当keep-alive 激活时使用
  activated() {},
  mounted() {
    // this.fetchData();
    
  },
  beforeRouteEnter: (to, from, next) => {
    next(() => {});
  },
  beforeRouteLeave(to, from, next) {
    next();
  }
};
</script>
<style lang="less">
#Demo {
  .tab-item {
    height: calc(~"100vh - 50px");
    position: relative;
    margin-top: 0.1rem;
  }
}
</style>
 