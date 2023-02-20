import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入 安装 vant
import Vant from 'vant'
// 为了自定义vant主题，需要将后缀名css改为less
import 'vant/lib/index.less'

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
