import GeometryBase from '../mixins/geometryBase'
import '@antv/f2/lib/geom/point'

export default {
    name: 'FPoint',
    mixins: [GeometryBase],
    created() {
        this.components.push(
            chart => {
                this.init(chart.point({
                    generatePoints: this.generatePoints,
                    sortable: this.sortable,
                    startOnZero: this.startOnZero,
                    connectNulls: this.connectNulls,
                }))
            }
        )
    }
}
