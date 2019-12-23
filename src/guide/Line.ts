import { addPlugin } from './utils'
import Base from '../mixins/base'
import '@antv/f2/lib/component/guide/line'

export default {
    name: 'FGuideLine',
    mixins: [Base],
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
                chart.guide().line({
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
