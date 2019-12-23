import ComponentBase from '../mixins/componentBase'
import '@antv/f2/lib/geom/line'

export default {
    name: 'FLine',
    mixins: [ComponentBase],
    created() {
        this.components.push(
            chart => {
                this.init(chart.line())
            }
        )
    }
}
