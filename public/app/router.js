import Vue from '/static/libraries/vue/vue.esm.browser.js'
import VueRouter from '/static/libraries/vue/vue-router.esm.js'

import MainTemplate from '/app/templates/MainTemplate.js'
import AdminTemplate from '/app/templates/AdminTemplate.js'

// Index page
import Welcome from '/app/pages/Welcome.js'
// Admin Area
import Dashboard from '/app/pages/admin/Dashboard.js'
import Customers from '/app/pages/admin/Customers.js'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { 
            path: '/', 
            component: MainTemplate, 
            props: { title: 'Welcome' }, 
            children: [
                { path: '', name: 'welcome', component: Welcome }
            ]
        },
        {
            path: '/admin',
            component: AdminTemplate,
            children: [
                { path: '', redirect: {name: 'admin:dashboard'} },
                { 
                    path: 'dashboard',
                    name: 'admin:dashboard',
                    component: Dashboard,
                    meta: { title: 'Dashboard' }
                },
                { 
                    path: 'customers',
                    name: 'admin:customers',
                    component: Customers,
                    meta: { title: 'Customers' }
                }
            ]
        }
    ]
})

router.beforeResolve((to, from, next) => {
    // If this isn't an initial page load.
    if (to.name) {
        // Start the route progress bar.
        NProgress.start()
    }
    next()
})
  
router.afterEach((to, from) => {
    // Complete the animation of the route progress bar.
    NProgress.done()
})

export default router
