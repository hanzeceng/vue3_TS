// service统一出口
import HYRequest from './request/index'
import { BASE_URL, TIME_OUT } from './request/config'

import localCache from '@/utils/cache'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      const token = localCache.getCache('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      const data = res.data
      if (data.returnCode === '-1001') {
        console.log('请求失败，错误信息')
      } else {
        return res.data
      }
    },
    responseInterceptorCatch: (err) => {
      // 判断不同的http的errorcode
      if (err.response.status === 404) {
        console.log('404的错误')
      }
      return err
    }
  }
})
export default hyRequest
