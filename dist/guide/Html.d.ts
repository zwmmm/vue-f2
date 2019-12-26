import '@antv/f2/lib/component/guide/html';
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
        position: {
            type: (ArrayConstructor | FunctionConstructor)[];
            require: boolean;
        };
        alignX: {
            type: StringConstructor;
            default: string;
            validator(value: any): Boolean;
        };
        alignY: {
            type: StringConstructor;
            default: string;
            validator(value: any): Boolean;
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
        html: {
            type: StringConstructor;
            require: boolean;
        };
    };
    created(): void;
};
export default _default;
