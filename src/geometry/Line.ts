import GeometryBase from '../mixins/geometry'
import '@antv/f2/lib/geom/line'

export default {
    name: 'FLine',
    mixins: [GeometryBase],
    props: {
        generatePoints: {
            type: Boolean,
            default: false
        },
        sortable: {
            type: Boolean,
            default: true
        }
    },
    created() {
        this.components.push(
            chart => {
                this.init(chart.line({
                    generatePoints: this.generatePoints,
                    sortable: this.sortable,
                    startOnZero: this.startOnZero,
                    connectNulls: this.connectNulls,
                }))
            }
        )
    }
}
