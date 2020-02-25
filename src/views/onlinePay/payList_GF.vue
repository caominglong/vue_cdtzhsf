<!-- 页面模板 -->
<template>

  <div id="Demo" style="height:100%;background: #fff;">
    <!-- x-header为vux的组件，left-options.showBack为是否显示返回文字 -->
    <x-header :left-options="{showBack: false}">规费收费</x-header>
    <div class="header_top"><span>规费详情</span></div>    
    <div class="header_nav">
      <img class="header_icon" :src="header_icon" />
      <div class="nav_info">
        <table>
          <tr>
            <td class="nav_title">收费大类:</td>
            <td>C证科目一考试费</td>
          </tr>
          <tr>
            <td class="nav_title">流水号:</td>
            <td>2132324223222</td>
          </tr>
        </table>
      </div>
      
      
    </div>
    <!-- 缴费信息列表 -->
    <box gap="10px 10px">
      <flexbox v-for="item in items" style="margin-top:10px">
        <flexbox-item :span="2" style="margin-left:0;text-align:center">
          <div class="checkbox_div" v-show="item.sfkx === '1'">
            <input type="hidden" 
            name="checkbox1" value="必选" disabled="disabled" checked/>
            <!-- :class="[item.sfkx === '1' ? 'S' : 'showCheckBox']" -->
            <label for="checkbox1" class="checkmark"></label>
          </div>

          <div class="checkbox_div" v-show="item.sfkx === '0'">
            <input type="checkbox" 
            name="checkbox2" value="可选" checked/>
            <!-- :class="[item.sfkx === '1' ? 'S' : 'showCheckBox']" -->
            <label for="checkbox2" class="checkmark"></label>
          </div>
          <!-- <checklist title="" :options="commonList" ></checklist> -->
        </flexbox-item>
        <flexbox-item style="margin-left:0">
          <p>
            <span class="nav_info_name pay_item">收费项目:</span>
            <span class="pay_item_info">{{item.sfmc}}</span>
          </p>
          <p>
            <span class="nav_info_name">收费金额:</span>
            <span class="red">{{item.je}}元</span>
          </p>
        </flexbox-item>
        <flexbox-item :span="2" style="width: 20px;height: 47px;">
          <div class="tip_div org" v-if="item.sfkx == '1'">必选</div>
          <div class="tip_div blue" v-if="item.sfkx == '0'">可选</div>
        </flexbox-item>
      </flexbox>
    </box>

    <box gap="50px 10px 10px 10px">
      <flexbox>
        <flexbox-item :span="4" class="flexboxItem"></flexbox-item>
        <flexbox-item class="flexboxItem">
          <span style="color :red;font-size:12px;">(请勾选需要缴费的内容)</span>
          <x-button type="primary" @click.native="pay">去&nbsp;&nbsp;缴&nbsp;&nbsp;费</x-button>
        </flexbox-item>
        <flexbox-item :span="4" class="flexboxItem"></flexbox-item>
      </flexbox>
    </box>
  </div>
</template>
<script>
import {
  XHeader,
  Selector,
  Group,
  Box,
  Flexbox,
  FlexboxItem,
  XButton,
  XInput,
  Checklist,
  XTable
} from "vux";
import { queryPayInfo } from "@/api/service";
import header_icon from "@/assets/header_icon.png";
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
    Checklist,
    XTable
  },
  data() {
    return {
      commonList: [{ key: 1 }],
      header_icon,
      checkValue : '',
      items: [
        { id: 1, sfmc: "C证科目二费用", je: 170,sfkx : '0' },
        { id: 2, sfmc: "C证科目三费用", je: 100, sfkx : '1' }
      ]
    };
  },
  methods: {

    // 查询方法
    pay() {
      //展示加载条
      this.$vux.loading.show({
        text: 'Loading'
      })
      console.log(11111);
      setTimeout(() => {
        this.$vux.loading.hide()
      }, 2000)
    }
  },
  mounted: function() {
    var params = this.$route.params;
    console.log(params);
    this.$vux.loading.show({
        text: 'Loading'
    });
    queryPayInfo(params).then(res => {
      console.log(res);
      this.$vux.loading.hide();
    });
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
html {
  font-size : 20px;
}

// @media only screen and (min-width: 401px){  
//   html {
//     font-size: 25px !important;
//   }
// }

// @media only screen and (min-width: 428px){
// html {
//   font-size: 26.75px !important;
// }
// }

// @media only screen and (min-width: 481px){
//   html {
//     font-size: 30px !important;
//   }
// }

// @media only screen and (min-width: 569px){
//   html {
//     font-size: 35px !important;
//   }
// }

// @media only screen and (min-width: 641px){
//   html {font-size: 40px !important;}
// }

.header_top {
	text-align: center;
	height: 0.8rem;
	background: #32cdff;
}
.header_top span {
    display: inline-block;
    height: 0.7rem;
    line-height: 0.8rem;
    font-size: 0.4rem;
    color: #fff;
    font-weight: 600;
}
.nav_title {
  text-align: right;
}
.header_nav {
	height: 1.5rem;
	background: #bcbcbc;
	position: relative;
}
.nav_info table {
  margin-top: 0.2rem;
	color: #fff;
	float: right;
	font-size: 0.35rem;
	width: 70%;
}
.header_icon {
  width: 1.2rem;
  height: 1.2rem;
  position: absolute;
  top: 10%;
}

// checkbox样式
.checkbox_div {
	//width: 20%;
	display: inline-block;
	//position: absolute;
}

input[type='checkbox'] {
  display: none;
}

label {
  display: inline-block;
  width: 0.5rem;
  height: 0.7rem;
  position: relative;
  margin-top: -6px;
  background: url('/static/vueg/image/check_no.png');
  background-size: 0.5rem 0.7rem;
  background-repeat: no-repeat;
  background-position: 0 0px;
}

input[type='checkbox']:checked+.checkmark {
   background: url('/static/vueg/image/checked.png');
   background-size: 0.5rem 0.7rem;
   background-repeat: no-repeat;
}

.flexboxItem {
  margin-left: 0px;
}

// 收费信息列表样式
.nav_info_name {
	color: #666666;
}
.pay_item {
	position: absolute;
}
.pay_item_info {
	display: inline-block;
    margin-left: 1.5rem;
}
.red {
	color: #ff2d2d;
}

// 必选、可选样式
.tip_div {
	width: 10%;
	display: inline-block;
    height: 1rem;
    text-align: right;
    position: absolute;
}
.org {
	color:#ffaf32;
} 
.blue {
	color: #32cdff;
}
</style>
 