import { addPlugin } from './utils'
import Base from '../mixins/base'
import '@antv/f2/lib/component/guide/text'

export default {
    name: 'FGuideText',
    mixins: [Base],
    props: {
        top: {
            type: Boolean,
            default: true
        },
        position: {
            type: [Array, Function],
            require: true
        },
        content: {
            type: String,
            require: true
        },
        style: {
            type: Object,
            default: () => ({
                fill: '#666', // 文本颜色
                fontSize: '12', // 文本大小
                fontWeight: 'bold', // 文本粗细
                rotate: Math.PI / 4 // 文本旋转，以弧度为单位
            })
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
