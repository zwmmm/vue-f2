import GeometryBase from '../mixins/geometry'
import '@antv/f2/lib/geom/schema'

export default {
    name: 'FSchema',
    mixins: [GeometryBase],
    created() {
        this.components.push(
            chart => {
                this.init(chart.schema({
                    generatePoints: this.generatePoints,
                    sortable: this.sortable,
                    startOnZero: this.startOnZero,
                    connectNulls: this.connectNulls,
                }))
            }
        )
    }
}
