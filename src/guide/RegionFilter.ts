import { addPlugin } from './utils'
import Base from '../mixins/base'
import '@antv/f2/lib/component/guide/region-filter'
import Guide from '../mixins/guide'

export default {
    name: 'FGuideRegionFilter',
    mixins: [Base, Guide],
    props: {
        top: {
            type: Boolean,
            default: true
        },
        start: {
            type: [Array, Function],
            require: true
        },
        end: {
            type: [Array, Function],
            require: true
        },
        color: {
            type: String,
            default: '#fff'
        },
        limitInPlot: {
            type: Boolean,
            default: false
        }
    },
    created() {
        addPlugin(this.plugins)
        this.components.push(
            chart => {
                this.guide = chart.guide().line({
                    top: this.top,
                    start: this.start,
                    end: this.end,
                    color: this.color,
                    limitInPlot: this.limitInPlot,
                })
            }
        )
    },
}
