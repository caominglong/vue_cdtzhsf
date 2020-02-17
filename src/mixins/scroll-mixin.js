import {
  mapMutations
} from 'vuex'
export const scrollMixin = {
  data() {
    return { 
      scrollType: 'loading', // loading：加载中; noData: 暂无数据； noMore：已经到底了，没有更多数据
      listData: [],
      scrollTop: 0, // 滚轮位置
    };
  },
  computed: {},
  watch: {},
  methods: {
    ...mapMutations({
      SET_scroll: "SET_scroll", // 滚轮高度
    }),

    // 下拉刷新
    $_scrollMixin_onRefresh(done) {
      this.common.OpenLoading();
      this.scrollType = "loading";
      this.fetchData('')
      done();
    },

    // 判断数量
    $_scrollMixin_checkCount(val) {
      val = val || []
      let pageSize = this.searchForm ? this.searchForm.pageSize : 100000
      if ( val.length == 0) {
        this.scrollType = "noData";
      } else if ( val.length < pageSize) {
        this.scrollType = "noMore";
      } else {
        this.scrollType = "loading";
      }
      val.forEach(item => {
        this.listData.push(item)
      })
      this.common.CloseLoading();
    },

    // 上拉加载 
    $_scrollMixin_onInfinite(done) {
      if (this.scrollType == "loading") {
        this.common.OpenLoading();
        this.fetchData('more');
        done();
      }
    },

    // 获取数据
    $_scrollMixin_fetchData(type, service) {
      this.common.OpenLoading(); // 打开正在加载接口
      if (type == "more") {
        this.searchForm.pageNo++;
        service(this.searchForm).then(res => {
          this.common.CloseLoading();
          this.$_scrollMixin_checkCount(res && res.data);
        });
      } else {
        this.listData = [];
        this.searchForm.pageNo = 1;
        service(this.searchForm).then(res => {
          this.common.CloseLoading();
          this.$_scrollMixin_checkCount(res && res.data);
        });
      }
    }
  },
  beforeRouteEnter: (to, from, next) => {
    next(vm => {
      document.querySelectorAll('.com-scroll')[vm.selected || 0].scrollTop = vm.scrollTop
    });
  },
  beforeRouteLeave(to, from, next) {
    this.scrollTop = document.querySelectorAll('.com-scroll')[this.selected || 0].scrollTop
    next();
  }
};
