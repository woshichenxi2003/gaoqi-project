import Vue from 'vue';
import App from './app.vue';
import 'assets/css/mui.min.css';
import 'assets/css/style.css';
Vue.config.productionTip = false;
new Vue({
    el: '#app',
    render: h => h(App)
})
