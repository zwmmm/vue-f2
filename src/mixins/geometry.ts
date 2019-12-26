import Base from './base'

/**
 * 检验 props 如果是对象的形式 是否存在 key
 */
function propsValidator(options: any): Boolean {
    if (
        Object.prototype.toString.call(options) === '[Object object]'
    ) {
        if (options.field && options.value) return true
        console.warn('Geometry 的参数如果是 Object 类型，必须带有 field 和 value 字段')
        return false
    }
    return true
}

export default {
    mixins: [Base],
    props: {
        position: {
            type: [String, Array],
            require: true
        },
        color: {
            type: [String, Object],
            validator: propsValidator
        },
        shape: {
            type: [String, Object],
            validator: propsValidator
        },
        size: {
            type: [String, Object],
            validator: propsValidator
        },
        style: {
            type: Object,
        },
        adjust: {
            type: [String, Array, Object]
        },
        animate: {
            type: [Boolean, Object]
        },
        generatePoints: {
            type: Boolean,
            default: true
        },
        sortable: {
            type: Boolean,
            default: false
        },
        startOnZero: {
            type: Boolean,
            default: true
        },
        connectNulls: {
            type: Boolean,
            default: false
        },
    },
    methods: {
        init(chart) {
            chart.position(this.position)
            ;[
                { label: 'color', value: this.color },
                { label: 'shape', value: this.shape },
                { label: 'size', value: this.size },
                { label: 'style', value: this.style },
                { label: 'adjust', value: this.adjust },
                { label: 'animate', value: this.animate },
            ].forEach(item => {
                if (!item.value) return

                // 如果是对象并且满足 { field: String, value: any } 格式
                if (
                    Object.prototype.toString.call(item.value) === '[Object object]'
                    && item.value.field
                    && typeof item.value.field === 'string'
                    && item.value.value
                    && Object.keys(item.value).length === 2
                ) {
                    chart[item.label](item.value.field, item.value.value)
                } else {
                    chart[item.label](item.value)
                }
            })
        }
    }
}
