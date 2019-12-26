import Core from '@antv/f2/lib/core'
// TODO time-cat 按需加载
import '@antv/f2/lib/scale/time-cat'
import { optionsValidator } from '../utils'

const { Chart } = Core

export default {
    name: 'FChart',
    props: {
        data: {
            type: [Object, Array],
            require: true
        },
        width: {
            type: Number,
            default: 500
        },
        height: {
            type: Number,
            default: 300
        },
        padding: {
            type: [Array, Number, String],
            default: 'auto'
        },
        appendPadding: {
            type: Number,
            default: 15
        },
        animate: {
            type: Boolean,
            default: false
        },
        syncY: {
            type: Boolean,
            default: false
        },
        defs: {
            type: Object,
            default: () => ({})
        },
    },
    watch: {
        data(value) {
            // 更新 chart
            this.chart.changeData(value)
        }
    },
    provide: {
        components: this.components,
        plugins: this.plugins,
    },
    created() {
        // 子组件会一个个往这里面塞回调
        this.components = []
        // 子组件填充插件
        this.plugins = []
    },
    render(h) {
        return h('canvas', { ref: 'canvas' }, this.$slots.default)
    },
    mounted() {
        // 实例化 chart
        this.chart = new Chart({
            el: this.$refs.canvas,
            width: this.width,
            height: this.height,
            padding: this.padding,
            appendPadding: this.appendPadding,
            animate: this.animate,
            pixelRatio: window.devicePixelRatio,
            plugins: this.plugins
        })

        // 装载数据
        this.chart.source(this.data, this.defs)
        // 选择坐标系
        this.chart.coord('rect')
        // 拼凑图表
        this.components.forEach(fn => fn(this.chart))
        // 渲染到 dom 上面
        this.chart.render()
    },
    methods: {
        get(key) {
            return this.chart.get(key)
        },
        /**
         * 清除辅助元素
         */
        clearGuide() {
            this.chart.guide().clear()
        }
    }
}
