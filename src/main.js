// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueBento from 'vue-bento'
import 'vue-bento/dist/vue-bento.css'

Vue.config.productionTip = false

Vue.use(VueBento)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
