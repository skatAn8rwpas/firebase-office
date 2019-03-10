const html = String.raw

export default {
    name: 'dashboard-page',
    template: html`<div>
        <h1>Customers Page</h1>
    </div>`,
    data: function() {
        return {
            customers: [] 
        }
    }
}