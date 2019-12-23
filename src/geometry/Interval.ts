import GeometryBase from '../mixins/geometryBase'
import '@antv/f2/lib/geom/interval'

export default {
    name: 'FInterval',
    mixins: [GeometryBase],
    created() {
        this.components.push(
            chart => {
                this.init(chart.interval({
                    generatePoints: this.generatePoints,
                    sortable: this.sortable,
                    startOnZero: this.startOnZero,
                    connectNulls: this.connectNulls,
                }))
            }
        )
    }
}
