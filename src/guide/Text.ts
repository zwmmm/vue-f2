import { addPlugin } from './utils'

import '@antv/f2/lib/component/guide/text'
import Guide from '../mixins/guide'

export default {
    name: 'FGuideText',
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
                this.guide = chart.guide().line({
                    top: this.top,
                    position: this.position,
                    content: this.content,
                    style: this.style,
                    limitInPlot: this.limitInPlot,
                    offsetX: this.offsetX,
                    offsetY: this.offsetY,
                })
            }
        )
    }
}
