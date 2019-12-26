/**
 * 检验 props 如果是 options 的形式 则必须符合下面的格式
 * { field: String, value: any }
 */
declare function optionsValidator(options: any): Boolean;
export { optionsValidator };
