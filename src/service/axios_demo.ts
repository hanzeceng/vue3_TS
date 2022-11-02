import axios from 'axios'
// axios 的全局配置
axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 10000

// axios的实例对象
// axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
//   console.log(res)
// })

axios.get('/get').then((res) => {
  console.log(res)
})

// Promise本身是可以有类型的
// new Promise<string>((resolve) => {
//   resolve('abc')
// }).then((res) => {
//   console.log(res)
// })

// axios的配置选项

// 5. axios.all 就是用promise.all来实现
axios
  .all([
    axios.get('/get', { params: { name: 'why', age: 19 } }),
    axios.post('/post', { data: { name: 'why', age: 19 } })
  ])
  .then((res) => {
    console.log(res[0].data)
    console.log(res[1].data)
  })

// 6. axios的拦截器
// fn1： 请求发送成功会执行的函数
// fn2: 请求发送失败会执行的函数
axios.interceptors.request.use(
  (config) => {
    console.log('请求拦截器发送成功', config)
    // 1. 给请求添加token
    // 2. isLoading的动画
    return config
  },
  (err) => {
    console.log('请求拦截器发送失败')
    return err
  }
)

// 响应的拦截
// fn1: 请求响应成功执行的回调
// fn2: 请求响应失败的执行的回调
axios.interceptors.response.use(
  (res) => {
    console.log('响应成功的拦截')
    return res
  },
  (err) => {
    console.log('服务器响应拦截失败')
    return err
  }
)
