<!-- 页面模板 -->
<template>
  <div id="Demo">
    <!-- x-header为vux的组件，left-options.showBack为是否显示返回文字 -->
    <x-header :left-options="{showBack: false}">列表Demo
      <!-- 
        to: 表示目标路由的链接。 当被点击后，内部会立刻把 to 的值传到 router.push()，
      所以这个值可以是一个字符串或者是描述目标位置的对象。 
      tag 有时候想要 <router-link> 渲染成某种标签，例如 <li>。 
        于是我们使用 tag prop 类指定何种标签，同样它还是会监听点击，触发导航。
        class是指定的样式
      -->
      <router-link to="/DemoSearch" tag="i" class="fa fa-search fa-lg" slot="right">
      </router-link>
    </x-header> 
    <div class="tab-item">
      <!-- com-scroll为自定义组件 -->
      <com-scroll
        :on-refresh="$_scrollMixin_onRefresh"
        :on-infinite="$_scrollMixin_onInfinite"
        :scrollType="scrollType"
      >
        <!-- ComCell为自定义组件 -->
        <ComCell v-for="item, index in listData" :key="'1-' + index">
          <!-- slot为vue的内置组件，作用为插槽，就是作为一个标记，然后可以将
          ComCell标签模版内<slot name="time"></slot>,<slot name="title"></slot>
          替换为当前span的内容
           -->
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
  //用于自定义指令
  directives: {},
  //计算属性
  computed: {
    //Vuex的属性
    ...mapGetters(['StoreSearchForm']),
  },
  //接收一个混入对象的数组,然后合并进来
  mixins: [scrollMixin],
  //观察属性前后的值，然后返回
  watch: {
    StoreSearchForm: {
      handler (val) {
        for (let i in val) {
          this.searchForm[i] = val[i]
        }
        this.fetchData()
      },
      //立即触发
      immediate: true,
      //深度监控，因为有的很多层结构，
      //此项为false，只能触发外层改动
      deep: true
    }
  },
  methods: {
    // 获取数据
    // type值： loading：加载中; noData: 暂无数据； noMore：已经到底了，没有更多数据
    fetchData(type) {
      // $_scrollMixin_fetchData定义在哪？
      this.$_scrollMixin_fetchData(type, demoService); // demoService 定义的接口
    },

    // 
  },

  // vue的钩子函数
  // 当keep-alive 激活时使用
  activated() {},
  //vue的钩子函数，实例被挂载后调用，具体参考生命周期图示
  mounted() {
    // this.fetchData();
    
  },
  // vue-router的钩子函数
  //进入路由之前执行的函数。
  //必须有这个，相当于一个按钮开启一样。
  beforeRouteEnter: (to, from, next) => {
    next(() => {});
  },
  beforeRouteLeave(to, from, next) {
    next();
  }
};
</script>

<style lang="less">
// Less 是一门 CSS 预处理语言，它扩展了 CSS 语言，增加了变量、
//Mixin、函数等特性，使 CSS 更易维护和扩展。
//Less 可以运行在 Node 或浏览器端。
#Demo {
  .tab-item {
    height: calc(~"100vh - 50px");
    position: relative;
    margin-top: 0.1rem;
  }
}
</style>
 