const html = String.raw

export default {
    name: 'main-template',
    props: ['title'],
    template: html`<div class="app-header-layout">
        <header class="app-header">
            <div class="app-toolbar">
                <span main-title>{{ title }}</span>
                <div spacer></div>
                <slot></slot>
            </div>
        </header>
        
        <RouterView />
    </div>`
}