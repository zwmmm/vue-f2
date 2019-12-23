import Guide from '@antv/f2/lib/plugin/guide'
let lock: boolean = false

export function addPlugin(plugins: Array<Object>): void {
    if (!lock) {
        plugins.push(Guide)
        lock = true
    }
}
