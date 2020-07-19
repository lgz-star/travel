// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'           //引用fastclick库，移动端点击方法有300s延迟，使用这个库可以加快相应速度
import './assets/styles/reset.css'
import './assets/styles/border.css'


Vue.config.productionTip = false
fastclick.attach(document.body)              //使用fastclick绑定document.body

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
