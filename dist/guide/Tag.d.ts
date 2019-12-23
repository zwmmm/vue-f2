import '@antv/f2/lib/component/guide/tag';
declare const _default: {
    name: string;
    mixins: ({
        computed: {
            components(): any;
            plugins(): any;
        };
        render(h: any): any;
    } | {
        methods: {
            repaint(): void;
        };
    })[];
    props: {
        top: {
            type: BooleanConstructor;
            default: boolean;
        };
        position: {
            type: (ArrayConstructor | FunctionConstructor)[];
            require: boolean;
        };
        content: {
            type: StringConstructor;
            require: boolean;
        };
        direct: {
            type: StringConstructor;
            default: string;
        };
        autoAdjust: {
            type: BooleanConstructor;
            default: boolean;
        };
        side: {
            type: NumberConstructor;
            default: number;
        };
        textStyle: {
            type: ObjectConstructor;
            default: () => {
                fontSize: number;
                fill: string;
            };
        };
        background: {
            type: ObjectConstructor;
            default: () => {
                padding: number[];
                radius: number;
                fill: string;
            };
        };
        pointStyle: {
            type: ObjectConstructor;
            default: () => {
                fill: string;
                r: number;
                lineWidth: number;
                stroke: string;
            };
        };
        withPoint: {
            type: BooleanConstructor;
            default: boolean;
        };
        limitInPlot: {
            type: BooleanConstructor;
            default: boolean;
        };
        offsetX: {
            type: NumberConstructor;
            default: number;
        };
        offsetY: {
            type: NumberConstructor;
            default: number;
        };
    };
    created(): void;
};
export default _default;
