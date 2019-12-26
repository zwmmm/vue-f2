import GeometryBase from '../mixins/geometry'
import '@antv/f2/lib/geom/polygon'

export default {
    name: 'FPolygon',
    mixins: [GeometryBase],
    created() {
        this.components.push(
            chart => {
                this.init(chart.polygon({
                    generatePoints: this.generatePoints,
                    sortable: this.sortable,
                    startOnZero: this.startOnZero,
                    connectNulls: this.connectNulls,
                }))
            }
        )
    }
}
