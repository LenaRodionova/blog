import Vue from 'vue'
import App from './App.vue'
import LightGallery from 'vue-light-gallery';
import VueWindowSize from 'vue-window-size';

Vue.use(VueWindowSize);
Vue.use(LightGallery);

Vue.config.productionTip = false

new Vue({
  render: app => app(App),
}).$mount('#app')
