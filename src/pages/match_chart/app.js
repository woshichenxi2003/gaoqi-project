import Vue from 'vue';
import App from './app.vue';
import 'assets/css/mui.min.css';
import 'assets/css/public.css';
import 'assets/css/match_chart.css';
Vue.config.productionTip = false;
new Vue({
    el: '#app',
    render: h => h(App)
});