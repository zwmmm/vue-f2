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
        }
    },
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
