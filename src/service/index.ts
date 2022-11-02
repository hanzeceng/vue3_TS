// service统一出口
import HYRequest from './request/index'
import { BASE_URL, TIME_OUT } from './request/config'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      const token = ''
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      console.log('请求成功的拦截')
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('请求失败的拦截')
      return err
    },
    responseInterceptor: (res) => {
      console.log('响应成功的拦截')
      const data = res.data
      if (data.returnCode === '-1001') {
        console.log('请求失败，错误信息')
      } else {
        return res.data
      }
    },
    responseInterceptorCatch: (err) => {
      console.log('响应失败的拦截')
      // 判断不同的http的errorcode
      if (err.response.status === 404) {
        console.log('404的错误')
      }
      return err
    }
  }
})
export default hyRequest
