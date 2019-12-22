import ComponentBase from '../mixins/componentBase'
import '@antv/f2/lib/geom/line'

export default {
    name: 'FLine',
    mixins: [ComponentBase],
    mounted() {
        this.components.push(
            chart => {
                this.init(chart.line())
            }
        )
    }
}
