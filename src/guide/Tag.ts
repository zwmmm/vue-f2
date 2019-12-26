import { addPlugin } from './utils'

import '@antv/f2/lib/component/guide/tag'
import Guide from '../mixins/guide'

export default {
    name: 'FGuideTag',
    mixins: [Guide],
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
        direct: {
            type: String,
            default: 'tl'
        },
        autoAdjust: {
            type: Boolean,
            default: true
        },
        side: {
            type: Number,
            default: 4
        },
        textStyle: {
            type: Object,
            default: () => ({
                fontSize: 12,
                fill: '#fff',
            })
        },
        background: {
            type: Object,
            default: () => ({
                padding: [4, 6], // tag 内边距，使用同 css 盒模型的 padding
                radius: 2, // tag 圆角
                fill: '#1890FF', // tag 背景色
            })
        },
        pointStyle: {
            type: Object,
            default: () => ({
                fill: '#1890FF', // 填充颜色
                r: 3, // 半径
                lineWidth: 1, // 线的边框
                stroke: '#fff', // 线的描边
            })
        },
        withPoint: {
            type: Boolean,
            default: true
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
                this.guide = chart.guide().line({
                    top: this.top,
                    position: this.position,
                    content: this.content,
                    direct: this.direct,
                    autoAdjust: this.autoAdjust,
                    side: this.side,
                    textStyle: this.textStyle,
                    background: this.background,
                    pointStyle: this.pointStyle,
                    withPoint: this.withPoint,
                    offsetX: this.offsetX,
                    offsetY: this.offsetY,
                    limitInPlot: this.limitInPlot,
                })
            }
        )
    }
}
