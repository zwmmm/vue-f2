export default {
    props: {
        name: {
            type: String,
            require: true
        },
        position: {
            type: String,
            require: true
        },
        color: {
            type: String
        },
        shape: {
            type: String
        },
        size: {
            type: [String, Number]
        }
    },
    computed: {
        components() {
            return this.$parent.components
        }
    },
    render: h => h(null),
    methods: {
        init(chart) {
            chart.position(this.position)
            ;[
                { label: 'color', value: this.color },
                { label: 'shape', value: this.shape },
                { label: 'size', value: this.size },
            ].forEach(item => {
                item.value && chart[item.label](item.value)
            })
        }
    }
}
