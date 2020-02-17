/* eslint-disable */
/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return;
  if (typeof content !== "string") {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
};

/**
 * 获取localStorage
 */
export const getStore = name => {
  if (!name) return;
  return window.localStorage.getItem(name);
};

/**
 * 移除localStorage
 */
export const removeStore = name => {
  if (!name) return;
  window.localStorage.removeItem(name);
};

/**
 * 删除数组某个元素
 * @param {Array} arr
 * @param {Function} func
 * 用法 :
 *   removeArray(arr, n => n != id)
 *   arr是操作的数组，id是要删除的元素，返回最新的数组
 */
export const removeArray = (arr, func) => {
  return Array.isArray(arr) ?
    arr.filter(func).reduce((acc, val) => {
      arr.splice(arr.indexOf(val), 1);
      return acc.concat(val);
    }, []) : [];
};

export const removeDuplicate = (array, key) => {
  let hash = {};
  array = array.reduce(function (arr, current) {
    hash[current[key]] ? "" : (hash[current[key]] = true && arr.push(current));
    return arr;
  }, []);
  console.log("array", array);
  return array;
};

/**
 * 数组包含
 * @param {Array} a 主
 * @param {Array} b 次
 */
export const isIncludes = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x)).length == b.length;
};

/**
 * 数组交集
 * @param {*} arr 主
 * @param {*} values 次
 */
export const similarity = (arr, values) => arr.filter(v => values.includes(v));

/**
 * 获取当前时间
 */
export const getCurrentTime = () => {
  let now = new Date();
  let year = now.getFullYear(); //年
  let month = now.getMonth() + 1; //月
  let day = now.getDate(); //日
  let hh = now.getHours(); //时
  let mm = now.getMinutes(); //分
  let ss = now.getSeconds(); //分
  let clock = year + "-";
  if (month < 10) clock += "0";
  clock += month + "-";
  if (day < 10) clock += "0";
  clock += day + " ";
  if (hh < 10) clock += "0";
  clock += hh + ":";
  if (mm < 10) clock += "0";
  clock += mm + ":";
  if (ss < 10) clock += "0";
  clock += ss;
  return clock;
};

/**
 * 深度克隆对象
 * @param {Object} obj
 */
export const deepClone = obj => {
  let _tmp, result;
  _tmp = JSON.stringify(obj);
  result = JSON.parse(_tmp);
  return result;
};

/**
 * 数组比较
 * @param {*} a
 * @param {*} b
 *  difference([1,2,3], [1,2]) -> [3]
 */
export const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};

/**
 *  提取汉字
 */
export function getChinese(str) {
  console.log("str", str);
  if (str != null && str != "") {
    var reg = /[\u4e00-\u9fa5]/g;
    return str.match(reg) ? str.match(reg).join("") : "";
  } else {
    return "";
  }
}

/**
 * 数组 去重 去空值
 * @param {*} arr 
 */
export function trimSetArr(arr) {
  console.log('arr', arr)
  let _arr = [...new Set(arr)] // 去重
  return _arr.filter(s => { // 去空
    return s && s.trim()
  })
}

/**
 * 判断时间是否结束, 返回true 已结束， false 未结束
 * @param {*} time 
 */
export function compareTime(time) {
  console.log('time', time);
  return new Date().getTime() - new Date(time.replace(new RegExp("-", "gm"), "/")).getTime() > 0
}
