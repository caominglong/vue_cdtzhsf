import store from '../store';
import Vue from 'vue'
export default {

  /**
   * 根据数组中对象的某一个属性值进行排序
   * 用法 arr.sort(compare('age'))
   * @param {*} key
   */
  Compare (key) {
    return function (a, b) {
      let value1 = a[key]
      let value2 = b[key]
      return value1 - value2
    };
  },

  /**
   * 打开加载框
   */
  OpenLoading () {
    Vue.$vux &&
    Vue.$vux.loading.show({
      text: "Loading"
    })
    // 请求超时
    setTimeout(() => {
      Vue.$vux && Vue.$vux.loading.hide();
    }, 20000)
  },

  /**
   * 关闭加载框
   */
  CloseLoading () {
    Vue.$vux && Vue.$vux.loading.hide();
  },

  /**
   * 状态码校验
   */
  CheckCode (res, callBack) {
    if (res.code == 1) {
      callBack()
    } else {
      Vue.$vux.toast.text(res.message || '请求失败！', 'middle')
    }
  },

  /**
   * code 转为 key
   */
  CodeToKey (arr) {
    let _arr = []
    if (arr) {
      arr.forEach((item, index) => {
        _arr.push({
          value: item.codename,
          key: item.code
        })
      })
    }
    return _arr
  },

  /**
   * 格式化字典表
   */
  FormatCode (arr, value) {
    let label = value
    arr && arr.forEach(item => {
      if (item.code == value) {
        label = item.codename
        return
      }
    })
    return label || '暂无'
  }
}
