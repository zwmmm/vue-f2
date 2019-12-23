import Legend from '@antv/f2/lib/plugin/legend'
import Base from '../mixins/base'

export default {
    name: 'FLegend',
    mixins: [Base],
    props: {
        name: {
            type: String,
            require: true
        },
        position: {
            type: String,
            default: 'top'
        },
        align: {
            type: String,
            default: 'left'
        },
        verticalAlign: {
            type: String,
            default: 'middle'
        },
        itemWidth: {
            type: [String, Number],
            default: 'auto'
        },
        showTitle: {
            type: Boolean,
            default: false
        },
        titleStyle: {
            type: Object,
            default: () => ({
                textAlign: 'center', // 文本对齐方向，可取值为： start middle end
                fill: '#404040', // 文本的颜色
                fontSize: 12, // 文本大小
                fontWeight: 'bold', // 文本粗细
                textBaseline: 'middle' // 文本基准线，可取 top middle bottom，默认为middle
            })
        },
        offsetX: {
            type: Number,
            default: 0
        },
        offsetY: {
            type: Number,
            default: 0
        },
        titleGap: {
            type: Number,
            default: 12
        },
        itemGap: {
            type: Number,
            default: 12
        },
        itemMarginBottom: {
            type: Number,
            default: 12
        },
        wordSpace: {
            type: Number,
            default: 6
        },
        unCheckStyle: {
            type: Object,
            default: () => ({
                fill: '#bfbfbf'
            })
        },
        itemFormatter: {
            type: Function,
            default: value => value
        },
        marker: {
            type: [String, Object, Function],
            default: 'circle'
        },
        valueStyle: {
            type: Object,
            default: () => ({
                textAlign: 'center', // 文本对齐方向，可取值为： start middle end
                fill: '#404040', // 文本的颜色
                fontSize: '12', // 文本大小
                fontWeight: 'bold', // 文本粗细
                textBaseline: 'top', // 文本基准线，可取 top middle bottom，默认为middle
                width: 20, // 设置文本的宽度
                height: 20 // 设置文本的高度
            })
        },
        nameStyle: {
            type: Object,
            default: () => ({
                textAlign: 'center', // 文本对齐方向，可取值为： start middle end
                fill: '#404040', // 文本的颜色
                fontSize: '12', // 文本大小
                fontWeight: 'bold', // 文本粗细
                textBaseline: 'top', // 文本基准线，可取 top middle bottom，默认为middle
                width: 20, // 设置文本的宽度
                height: 20 // 设置文本的高度
            })
        },
        joinString: {
            type: String,
            default: ':'
        },
        triggerOn: {
            type: String,
            default: 'click'
        },
        selectedMode: {
            type: String,
            default: 'multiple',
            validator(value): boolean {
                return ['multiple', 'single'].includes(value)
            }
        },
        clickable: {
            type: Boolean,
            default: true
        },
        onClick: {
            type: Function,
            default: e => {}
        },
        custom: {
            type: Boolean,
            default: false
        }
    },
    created() {
        this.plugins.push(Legend)
        this.components.push(
            chart => {
                chart.legend(this.name, {
                    position: this.position,
                    align: this.align,
                    verticalAlign: this.verticalAlign
                })
            }
        )
    },
}
