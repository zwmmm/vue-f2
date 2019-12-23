import { addPlugin } from './utils'
import Base from '../mixins/base'
import '@antv/f2/lib/component/guide/html'
import Guide from '../mixins/guide'

export default {
    name: 'FGuideLHtml',
    mixins: [Base, Guide],
    props: {
        position: {
            type: [Array, Function],
            require: true
        },
        alignX: {
            type: String,
            default: 'center',
            validator(value): Boolean {
                return ['left', 'center', 'right'].includes(value)
            }
        },
        alignY: {
            type: String,
            default: 'middle',
            validator(value): Boolean {
                return ['top', 'middle', 'bottom'].includes(value)
            }
        },
        limitInPlot: {
            type: Boolean,
            default: false
        },
        offsetX: {
            type: Number,
            default: 0
        },
        offsetY: {
            type: Number,
            default: 0
        },
        html: {
            type: String,
            require: true
        }
    },
    created() {
        addPlugin(this.plugins)
        this.components.push(
            chart => {
                this.guide = chart.guide().line({
                    position: this.position,
                    staalignXrt: this.alignX,
                    offsetY: this.offsetY,
                    offsetX: this.offsetX,
                    limitInPlot: this.limitInPlot,
                    html: this.html,
                })
            }
        )
    }
}
