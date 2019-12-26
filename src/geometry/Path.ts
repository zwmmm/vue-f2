import GeometryBase from '../mixins/geometry'
import '@antv/f2/lib/geom/path'

export default {
    name: 'FPath',
    mixins: [GeometryBase],
    props: {
        generatePoints: {
            type: Boolean,
            default: false
        },
    },
    created() {
        this.components.push(
            chart => {
                this.init(chart.path({
                    generatePoints: this.generatePoints,
                    sortable: this.sortable,
                    startOnZero: this.startOnZero,
                    connectNulls: this.connectNulls,
                }))
            }
        )
    }
}
