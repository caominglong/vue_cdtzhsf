<!-- 搜索模板 -->
<template>
  <div id="DemoSearch">
    <x-header>搜索Demo
    </x-header>
    <div class="com-form">
      <x-input
        title="输入框："
        v-model="formData.title"
        placeholder="请输入"
      ></x-input>
      <selector
        v-model="formData.select"
        title="下拉框："
        placeholder="请选择"
        :options="selectOptions"
      ></selector>
    </div>
    <div class="com-btn-bottom">
      <flexbox>
        <flexbox-item>
          <x-button
            type="primary"
            @click.native="handleSearch"
          >查 &nbsp;&nbsp;&nbsp;询</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button
            @click.native="handleReset"
            type="default"
          > 重 &nbsp;&nbsp;&nbsp;置</x-button>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>
<script>
import { XHeader, Selector, Group, XInput, XButton, Flexbox, FlexboxItem } from "vux";
export default {
  name: "DemoSearch",
  components: {
    XHeader,
    Selector,
    Group,
    XInput,
    XButton,
    Flexbox,
    FlexboxItem
  },
  data() {
    return {
      formData: {
        title: '',
        select: ''
      }
    };
  },
  directives:{},
  computed: {
    selectOptions: function () {
      return [{
        value: '选项一',
        label: '1',
      }, {
        value: '选项二',
        label: '2',
      }]
    }
  },
  watch: {},
  methods: {
    // 查询
    handleSearch () {
      this.$store.commit('SET_StoreSearchForm', this.formData)
      this.$router.go(-1)
    },

    // 重置
    handleReset () {
      this.formData = {
        input: '',
        select: ''
      }
    }

  },
  activated() {},
  mounted() {},
  beforeRouteEnter: (to, from, next) => {
    next(() => {});
  },
  beforeRouteLeave(to, from, next) {
    next();
  }
};
</script>
<style lang="less">
#DemoSearch {
}
</style>
