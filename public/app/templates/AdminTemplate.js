const html = String.raw

export default {
    name: 'main-template',
    props: {
        title: {
            type: String,
            default: 'Default'
        }
    },
    template: html`<div class="app-drawer-layout">

        <aside class="app-drawer" drawer>
            Drawer content

            <nav>
                <RouterLink :to="{name: 'admin:dashboard'}" >Dashboard</RouterLink>
                <RouterLink :to="{name: 'admin:customers'}" >Customers</RouterLink>
            </nav>
        </aside>

        <section class="app-header-layout">
            <header class="app-header">
                <div class="app-toolbar">
                    <span main-title>{{ metaTitle }}</span>
                    <div spacer></div>
                    <slot></slot>
                </div>
            </header>

            <RouterView />
        </section>
        
    </div>`,
    data: function() {
        return {
            metaTitle: !!this.$route.meta.title && this.$route.meta.title

        }
    },

    watch: {
        '$route': function (route) {
            console.log('route change watched...')
            console.log(route)
            this.metaTitle = route.meta.title
        }
    }
}