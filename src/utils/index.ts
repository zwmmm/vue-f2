/**
 * 检验 props 如果是 options 的形式 则必须符合下面的格式
 * { field: String, value: any }
 */
function optionsValidator(options: any): Boolean {
    if (
        Object.prototype.toString.call(options) === '[Object object]'
    ) {
        if (
            Object.prototype.toString.call(options.value) === '[Object object]'
            && options.value.field
            && typeof options.value.field === 'string'
            && options.value.value
            && Object.keys(options.value).length === 2
        ) return true
        console.warn('Geometry 的参数如果是 Object 类型，必须带有 field 和 value 字段')
        return false
    }
    return true
}

export {
    optionsValidator
}
