<script src="https://unpkg.com/vue"></script>
import App from './App.vue'

Vue.config.productionTip = false
Vue.component('app', app)

new Vue({
  render: h => h(App),
}).$mount('#app')
