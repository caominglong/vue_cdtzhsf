<!-- 页面模板 -->
<template>
  <div id="Demo">
    <!-- x-header为vux的组件，left-options.showBack为是否显示返回文字 -->
    <x-header :left-options="{showBack: false}">规费详情
    </x-header>
    <div style="width : 100%;height:100px;background:gray">
        <div>收费大类：</div>
        <div>流水号：</div>
    </div>
    <!-- 缴费信息列表 -->
    <box gap="10px 10px">
        
        <flexbox v-for="item in items">
            <flexbox-item :span="2" style="margin-left:0">
                <checklist title="" :options="commonList" ></checklist>
            </flexbox-item>
            <flexbox-item style="margin-left:0">
                <div>收费名称：{{item.sfmc}}</div>
                <div>收费金额：{{item.je}}</div>
            </flexbox-item>
            <flexbox-item :span="2" style="margin-left:0">
                <span>可选</span>
            </flexbox-item>
        </flexbox>
    </box>

    <box gap="50px 10px 10px 10px">
    <flexbox>
        <flexbox-item :span="4" style="margin-left:0">
        </flexbox-item>
        <flexbox-item style="margin-left:0">
            <span style="color :red;font-size:12px;">(请勾选需要缴费的内容)</span>
          <x-button type="primary" @click.native="query">
              去&nbsp;&nbsp;缴&nbsp;&nbsp;费</x-button>
        </flexbox-item>
        <flexbox-item :span="4" style="margin-left:0">
        </flexbox-item>
    </flexbox>
    </box>
  </div>
</template>
<script>
import { XHeader,Selector,Group,Box,Flexbox,FlexboxItem,XButton,XInput,Checklist} from "vux";
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
    Checklist
  },
  mounted:function(){
      var params = this.$route.params;
      console.log(params);
      queryPayInfo(params).then(res => { 
        console.log(res); 
      });
  },
  data() {
    return {
      commonList : [{key:1}],
      items : [{id : 1, sfmc : 'C证科目二费用', je : 170},{id : 2, sfmc : 'C证科目三费用', je : 100}]
    };
  },
  methods : {
      // 查询方法
      query () {
          console.log(11111);
          
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
 