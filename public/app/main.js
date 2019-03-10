import Vue from '/static/libraries/vue/vue.esm.browser.js'

import store from './store/index.js'
import router from  './router.js'
import App from './App.js';


window.vm = new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
