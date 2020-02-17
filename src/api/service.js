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
        resolve({
          data: data
        })
      } else {
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
