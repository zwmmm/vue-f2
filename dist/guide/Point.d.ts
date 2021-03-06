import '@antv/f2/lib/component/guide/point';
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
        position: {
            type: (ArrayConstructor | FunctionConstructor)[];
            require: boolean;
        };
        style: {
            type: ObjectConstructor;
            default: () => {
                fill: string;
                fontSize: string;
                fontWeight: string;
                rotate: number;
            };
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
