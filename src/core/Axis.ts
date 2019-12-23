import Base from '../mixins/base'

export default {
    name: 'FAxis',
    mixins: [Base],
    props: {
        name: {
            type: String,
            require: true
        },
        line: {
            type: Object,
            default: () => ({})
        },
        label: {
            type: [Object, Function],
            default: () => ({})
        },
        grid: {
            type: [Object, Function],
            default: () => ({})
        },
        tickLine: {
            type: Object,
            default: () => ({})
        },
        position: {
            type: String,
            default: 'bottom'
        },
    },
    created() {
        this.components.push(chart => {
            chart.axis(this.name, {
                line: this.line,
                grid: this.grid,
                tickLine: this.tickLine,
                label: this.label,
                position: this.position
            })
        })
    }
}
