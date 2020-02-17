<!-- 页面模板 -->
<template>
  <div id="TemplateVue"></div>
</template>
<script>
export default {
  name: "TemplateVue",
  components: {},
  data() {
    return {};
  },
  directives:{},
  computed: {},
  watch: {},
  methods: {},
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
#TemplateVue {
}
</style>
