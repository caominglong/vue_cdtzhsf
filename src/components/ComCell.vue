<style lang="less" scoped>
.ComCell {
    background-color: #fff;
    padding: 0.1rem 0.2rem;
    padding-bottom: 0rem;
    line-height: 0.5rem;
    border-bottom: 2px solid #eee;
  .ComCell_title {
    font-size: 0.32rem;
    font-weight: 400;
    line-height: 0.5rem;
  }
  .ComCell_time {
    position: relative;
    font-size: 0.28rem;
    color: #666666;
  }
  .ComCell_bottom {
    text-align: right;
    .clockIcon {
      position: absolute;
      left: -0.28rem;
      top: 0.06rem;
    }
  }
}
</style>

<template>
  <section class="ComCell">
    <div>
      <span class="ComCell_title">
        <slot name="title"></slot>
      </span>
    </div>
    <div class="ComCell_bottom">
      <span class="ComCell_time">
        <img
          :src="clockIcon"
          alt=""
          width="10px"
          class="clockIcon"
        >
        <slot name="time"></slot>
      </span>
    </div>
  </section>
</template>
<script>
import clockIcon from "@/assets/clock.svg";
export default {
  name: "ComCell",
  components: {},
  data() {
    return {
      clockIcon
    };
  },
  computed: {},
  watch: {},
  props: {
  },
  methods: {
  }
};
</script>
