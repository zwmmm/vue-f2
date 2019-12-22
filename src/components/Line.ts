import Base from '../mixins/base'
import '@antv/f2/lib/geom/line'

export default {
    name: 'FLine',
    mixins: [Base],
    mounted() {
        this.components.push(
            chart => {
                this.init(chart.line())
            }
        )
    }
}
