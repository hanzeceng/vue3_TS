import globalRegister from './global'
import { createApp, App } from 'vue'
import 'normalize.css'
import './assets//css/index.less'

import rootApp from './App.vue'

import router from './router/index'
import store from './store/index'
import { setupStore } from './store/index'

const app: App = createApp(rootApp)

app.use(router)
app.use(store)
// 解决每一次刷新的时候vuex里面的token丢失的问题
setupStore()
globalRegister(app)

app.mount('#app')
