import Base from './base'

export default {
    mixins: [Base],
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
        },
        style: {
            type: Object,
        },
        adjust: {
            type: [String, Array, Object]
        },
        animate: {
            type: [Boolean, Object]
        },
        generatePoints: {
            type: Boolean,
            default: true
        },
        sortable: {
            type: Boolean,
            default: false
        },
        startOnZero: {
            type: Boolean,
            default: true
        },
        connectNulls: {
            type: Boolean,
            default: false
        },
    },
    methods: {
        init(chart) {
            chart.position(this.position)
            ;[
                { label: 'color', value: this.color },
                { label: 'shape', value: this.shape },
                { label: 'size', value: this.size },
                { label: 'style', value: this.style },
                { label: 'adjust', value: this.adjust },
                { label: 'animate', value: this.animate },
            ].forEach(item => {
                item.value && chart[item.label](item.value)
            })
        }
    }
}
