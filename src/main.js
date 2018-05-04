import Vue from 'vue'
// 清除浏览器默认的样式
import 'reset.css'
import App from './App.vue'
let vm = new Vue({
  el: '#app',
  render: h => h(App)
})

Vue.use(vm)
