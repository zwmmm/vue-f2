import { addPlugin } from './utils'
import Guide from '../mixins/guide'
import '@antv/f2/lib/component/guide/arc'

export default {
    name: 'FGuideArc',
    mixins: [Guide],
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
        style: {
            type: Object,
            default: () => ({
                stroke: '#999', // 线的颜色
                lineDash: [0, 2, 2], // 虚线的设置
                lineWidth: 3, // 线的宽度
            })
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
                    style: this.style,
                    limitInPlot: this.limitInPlot,
                })
            }
        )
    }
}
