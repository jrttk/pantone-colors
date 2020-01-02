import Vue from 'vue'
import App from './App.vue'

// Stylesheets
import './assets/styles/entry.scss'

// Vue Clipboard 2
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

// Vue Toasted
import Toasted from 'vue-toasted';
Vue.use(Toasted)

// Octicons
const octicons = require('@primer/octicons')
Vue.prototype.$octicons = octicons

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
