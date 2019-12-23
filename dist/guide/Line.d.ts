import '@antv/f2/lib/component/guide/line';
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
        start: {
            type: (ArrayConstructor | FunctionConstructor)[];
            require: boolean;
        };
        end: {
            type: (ArrayConstructor | FunctionConstructor)[];
            require: boolean;
        };
        style: {
            type: ObjectConstructor;
            default: () => {
                stroke: string;
                lineDash: number[];
                lineWidth: number;
            };
        };
        limitInPlot: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
    created(): void;
};
export default _default;
