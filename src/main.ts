import globalRegister from './global'
import { createApp, App } from 'vue'
import 'normalize.css'
import './assets//css/index.less'

import rootApp from './App.vue'
import hyRequest from './service'

import router from './router/index'
import store from './store/index'

const app: App = createApp(rootApp)

app.use(router)
app.use(store)
globalRegister(app)

app.mount('#app')

interface DataType {
  data: any
  returnCode: string
  success: boolean
}
hyRequest
  .get<DataType>({
    url: '/home/multidata',
    showLoading: false
  })
  .then((res) => {
    console.log(res.data)
    console.log(res.returnCode)
    console.log(res.success)
  })
