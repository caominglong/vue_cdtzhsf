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
        <selector required title="地区" placeholder="请选择地区" :options="areaList" v-model="area"></selector>
    </group>

    <group>
        <selector title="收费大类" placeholder="请选择收费大类" ref="sflxRef" :options="sflxList" v-model="sflx" @on-change="onChange"></selector>
    </group>

    <group  v-if=" sflx === '300'">
      <!-- this.$refs.['sflxRef'].getFullValue() -->
        <selector placeholder="请选择收费项目" title="收费项目" v-model="sfxm" :options="sfxmList_exam"></selector>
    </group>

    <group v-if="sflx === '200' || sflx === '300'">
        <x-input type="text" title="身份证明号码" 
        placeholder="请输入身份证明号码" :max=18 v-model="sfzmhm" ></x-input>
    </group>

    <group>
        <x-input type="text" title="流水号" 
        placeholder="请输入业务流水号" :max=13 :min=13 v-model="lsh"></x-input>
    </group>

    <box gap="50px 10px 2px 10px">
      <flexbox>
          <flexbox-item :span="4">
            
          </flexbox-item>
          <flexbox-item>
            <x-button type="primary" @click.native="query" :disabled="lsh.length != 13 && sfzmhm ===''">
                查&nbsp;&nbsp;&nbsp;询</x-button>
          </flexbox-item>
          <flexbox-item :span="4">
          </flexbox-item>
      </flexbox>
    </box>
    <div v-if="sflx === '200' || sflx === '300'">
      <span style="color:red;font-size:12px" >注意：驾驶证工本费用、考试费用选择输入流水号或身份证号码进行查询</span>
    </div>
  </div>
</template>
<script>
import { XHeader,Selector,Group,Box,Flexbox,FlexboxItem,XButton,XInput} from "vux";
import {queryInfoFromSys} from '@/api/service';
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
      sfzmhm : '',
      lsh : '1111111111111',    //流水号
      area : '',       //地区
      //收费大项
      sflx : '',
      sfxm : '', //收费项目
      //showFlag : false, //是否显示
      areaList : [], //地区列表
      sflxList : [], //收费大类列表
      sfxmList_exam : [] //考试费收费项目
    };
  },
  mounted:function(){
      //获取收费大类
      var params = {"codetype" : "0002"};
      queryInfoFromSys(params).then(res => { 
        //渲染sflxList对象
        console.log(res);
        res.data.forEach((item) => {
          if (item.code === null) {
              this.sflxList.push({key : item.codevalue,value : item.codename});
          } else {
              this.sfxmList_exam.push({key : item.codevalue,value : item.codename});
          }
        })
      });
      //获取地市信息
      var params = {"codetype" : "0005"};
      queryInfoFromSys(params).then(res => { 
        console.log(res);
        //渲染areaList对象
        res.data.forEach((item) => {
            this.areaList.push({key : item.codevalue,value : item.codename});
        })
      });
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
      },
      //选择框切换触发
      onChange (val) {
          //触发后做两件事情,1-显示提示条，2-显示身份证框，
          //通过一个showFlag来实现
          console.log(this.sflxList);
          //this.showFlag = true;
          //console.log(this.sflxList[val].key);
          
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
 