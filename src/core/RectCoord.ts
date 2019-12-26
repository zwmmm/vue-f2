import Base from '../mixins/base'

export default {
    name: 'FRectCoord',
    mixins: [Base],
    props: {
        transposed: {
            type: Boolean,
            default: false
        }
    },
    created() {
        this.components.push(chart => {
            chart.coord('rect', {
                transposed: this.transposed
            })
        })
    }
}
