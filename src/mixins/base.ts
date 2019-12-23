export default {
    computed: {
        components() {
            return this.$parent.components
        },
        plugins() {
            return this.$parent.plugins
        }
    },
    render(h) {
        return h(null)
    }
}
