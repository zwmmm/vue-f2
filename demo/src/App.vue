<template>
    <div id="app">
        <f-chart :data="data" :defs="defs">
            <f-axis name="date" :label="label"></f-axis>
            <f-line position="date*value" color="#ccc"></f-line>
        </f-chart>
    </div>
</template>

<script>
import { Chart, Line, Axis } from '../../dist/index.esm.min'
import data from './data'

export default {
    components: {
        FChart: Chart,
        FAxis: Axis,
        FLine: Line
    },
    data() {
        return {
            data,
            defs: {
                date: {
                    type: 'timeCat',
                    range: [ 0, 1 ],
                    tickCount: 3
                }
            }
        }
    },
    methods: {
        label(text, index, total) {
            const textCfg = {};
            if (index === 0) {
                textCfg.textAlign = 'left';
            } else if (index === total - 1) {
                textCfg.textAlign = 'right';
            }
            return textCfg;
        }
    }
}
</script>
