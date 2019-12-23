import Tooltip from '@antv/f2/lib/plugin/tooltip'
import Base from '../mixins/base'

export default {
    naem: 'FTooltip',
    mixins: [Base],
    props: {
        alwaysShow: {
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
        triggerOn: {
            type: [Array, String],
            default: () => ['touchstart', 'touchmove']
        },
        triggerOff: {
            type: [Array, String],
            default: 'touchend'
        },
        showTitle: {
            type: Boolean,
            default: false
        },
        showCrosshairs: {
            type: Boolean,
            default: false
        },
        crosshairsStyle: {
            type: Object,
            default: () => ({
                stroke: 'rgba(0, 0, 0, 0.25)',
                lineWidth: 2
            })
        },
        showTooltipMarker: {
            type: Boolean,
            default: true
        },
        tooltipMarkerStyle: {
            type: Object,
            default: () => ({
                fill: '#fff' // 设置 tooltipMarker 的样式
            })
        },
        background: {
            type: Object,
            default: () => ({
                radius: 2,
                fill: '#1890FF',
                padding: [ 6, 10 ]
            })
        },
        titleStyle: {
            type: Object,
            default: () => ({
                fontSize: 24,
                fill: '#fff',
                textAlign: 'start',
                textBaseline: 'top'
            })
        },
        nameStyle: {
            type: Object,
            default: () => ({
                fontSize: 24,
                fill: '#fff',
                textAlign: 'start',
                textBaseline: 'middle'
            })
        },
        valueStyle: {
            type: Object,
            default: () => ({
                fontSize: 24,
                fill: '#fff',
                textAlign: 'start',
                textBaseline: 'middle'
            })
        },
        showItemMarker: {
            type: Boolean,
            default: true
        },
        itemMarkerStyle: {
            type: Object,
            default: () => ({
                radius: 7,
                symbol: 'circle',
                lineWidth: 2,
                stroke: '#fff'
            })
        },
        crosshairsType: {
            type: String,
            default: 'y',
            validator(value): boolean {
                return ['x', 'y', 'xy'].includes(value)
            }
        },
        showXTip: {
            type: Boolean,
            default: false
        },
        showYTip: {
            type: Boolean,
            default: false
        },
        xTip: {
            type: [Object, Function],
            default: value => value
        },
        yTip: {
            type: [Object, Function],
            default: value => value
        },
        xTipBackground: {
            type: Object,
            default: () => ({})
        },
        yTipBackground: {
            type: Object,
            default: () => ({})
        },
        snap: {
            type: Boolean,
            default: true
        }
    },
    created() {
        this.plugins.push(Tooltip)
        this.components.push(
            chart => {
                chart.tooltip({
                    alwaysShow: this.alwaysShow,
                    offsetX: this.offsetX,
                    offsetY: this.offsetY,
                    triggerOn: this.triggerOn,
                    triggerOff: this.triggerOff,
                    showTitle: this.showTitle,
                    showCrosshairs: this.showCrosshairs,
                    crosshairsStyle: this.crosshairsStyle,
                    showTooltipMarker: this.showTooltipMarker,
                    tooltipMarkerStyle: this.tooltipMarkerStyle,
                    background: this.background,
                    titleStyle: this.titleStyle,
                    nameStyle: this.nameStyle,
                    valueStyle: this.valueStyle,
                    showItemMarker: this.showItemMarker,
                    itemMarkerStyle: this.itemMarkerStyle,
                    crosshairsType: this.crosshairsType,
                    showXTip: this.showXTip,
                    showYTip: this.showYTip,
                    xTip: this.xTip,
                    yTip: this.yTip,
                    xTipBackground: this.xTipBackground,
                    yTipBackground: this.yTipBackground,
                    snap: this.snap,
                    onShow: obj => this.$emit('onShow', obj),
                    onHide: obj => this.$emit('onHide', obj),
                    onChange: obj => this.$emit('onChange', obj),
                })
            }
        )
    }
}
