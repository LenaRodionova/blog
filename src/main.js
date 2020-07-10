import Vue from 'vue'
import App from './App.vue'
import LightGallery from 'vue-light-gallery';

Vue.use(LightGallery);

Vue.config.productionTip = false

new Vue({
  render: app => app(App),
}).$mount('#app')
