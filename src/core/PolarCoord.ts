import Base from '../mixins/base'
import '@antv/f2/lib/coord/polar'

export default {
    name: 'FPolarCoord',
    mixins: [Base],
    props: {
        transposed: {
            type: Boolean,
            default: false
        },
        startAngle: {
            type: Number,
            default: 0
        },
        endAngle: {
            type: Number,
            default: 360
        },
        innerRadius: {
            type: Number,
            default: .5
        },
        radius: {
            type: Number,
            default: .5
        },
    },
    created() {
        this.components.push(chart => {
            chart.coord('rect', {
                transposed: this.transposed,
                startAngle: this.startAngle,
                endAngle: this.endAngle,
                innerRadius: this.innerRadius,
                radius: this.radius,
            })
        })
    }
}
