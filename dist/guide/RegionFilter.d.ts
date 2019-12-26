import '@antv/f2/lib/component/guide/region-filter';
declare const _default: {
    name: string;
    mixins: {
        mixins: {
            inject: string[];
            render(h: any): any;
        }[];
        methods: {
            repaint(): void;
        };
    }[];
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
        color: {
            type: StringConstructor;
            default: string;
        };
        limitInPlot: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
    created(): void;
};
export default _default;
