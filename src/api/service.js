import request from '@/utils/request'

// ------------------ 案例调用 ------------------- //

/**
 * 假的接口
 * @param {*} params
 */
export function demoService (params) {
  return new Promise((resolve, reject) => {
      if (true) {
        let data = []
        for(let i = 0; i < params.pageSize; i++) {
          data.push({
            title: '你搜的标题是' + (params.title || ''),
            time: new Date()
          })
        }
        //接口成功返回
        resolve({
          data: data
        })
      } else {
        //接口失败返回
        reject()
      }
  })
}

/**
 * 接口调用
 * @param {*} params
 */
export function fetchData(params) {
  return request({
    url: `/xxxxxx`,
    method: 'get'
  })
}

/**
 * 接口调用
 * @param {*} params
 */
export function queryPayInfo(params) {
  alert(1);
  // return request({
  //   url: `/xxxxxx`,
  //   method: 'get'
  // })
  return new Promise((resolve, reject) => {
    if (true) {
      let data = []
      //接口成功返回
      resolve({
        data: data
      })
    } else {
      //接口失败返回
      reject()
    }
})
}