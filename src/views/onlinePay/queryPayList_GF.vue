<!-- 页面模板 -->
<template>
  <div id="Demo">
    <!-- x-header为vux的组件，left-options.showBack为是否显示返回文字 -->
    <x-header :left-options="{showBack: false}">规费查询
      <!-- 
        to: 表示目标路由的链接。 当被点击后，内部会立刻把 to 的值传到 router.push()，
      所以这个值可以是一个字符串或者是描述目标位置的对象。 
      tag 有时候想要 <router-link> 渲染成某种标签，例如 <li>。 
        于是我们使用 tag prop 类指定何种标签，同样它还是会监听点击，触发导航。
        class是指定的样式
      -->
    </x-header>
    <group>
        <!-- v-model为vue的表单双向绑定 -->
        <selector title="地区" :options="areaList" v-model="area"></selector>
    </group>
    
    <group>
        <selector title="收费大类" :options="sflxList" v-model="sflx"></selector>
    </group>

    <group>
        <x-input type="text" title="流水号" 
        required placeholder="请输入业务流水号" :max=13 :min=13 v-model="lsh"></x-input>
    </group>

    <box gap="50px 10px 10px 10px">
    <flexbox>
        <flexbox-item :span="4">
          
        </flexbox-item>
        <flexbox-item>
          <x-button type="primary" @click.native="query" :disabled="lsh.length != 13">
              查&nbsp;&nbsp;&nbsp;询</x-button>
        </flexbox-item>
        <flexbox-item :span="4">
        </flexbox-item>
    </flexbox>
    </box>
  </div>
</template>
<script>
import { XHeader,Selector,Group,Box,Flexbox,FlexboxItem,XButton,XInput} from "vux";
import {queryPayInfo} from '@/api/service';
export default { 
  name: "Demo",
  components: {
    XHeader,
    Group,
    //vux的下拉框
    Selector,
    Box,
    //vux的布局组件
    Flexbox,
    FlexboxItem,
    XButton,
    XInput,
  },
  data() {
    return {
      //流水号
      lsh : '1111111111111',
      //地区
      area : '',
      //收费大项
      sflx : '',
      areaList : [{key: '1', value : '舟山'},{key: '2', value : '杭州'}],
      sflxList : [{key: '1', value : '机动车费用'},{key: '2', value : '驾驶人费用'}]
    };
  },
  methods : {
      // 查询方法
      query () {
          console.log(111111);
          var params = {
              area : this.area,
              sflx : this.area,
              lsh : this.lsh
          };
          //跳转到缴费信息展示页面
          this.$router.push({name : 'payList_GF',params : params});
      }
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
 