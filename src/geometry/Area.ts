import GeometryBase from '../mixins/geometryBase'
import '@antv/f2/lib/geom/area'

export default {
    name: 'FArea',
    mixins: [GeometryBase],
    props: {
        sortable: {
            type: Boolean,
            default: true
        }
    },
    created() {
        this.components.push(
            chart => {
                this.init(chart.area({
                    generatePoints: this.generatePoints,
                    sortable: this.sortable,
                    startOnZero: this.startOnZero,
                    connectNulls: this.connectNulls,
                }))
            }
        )
    }
}
