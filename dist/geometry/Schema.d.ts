import '@antv/f2/lib/geom/schema';
declare const _default: {
    name: string;
    mixins: {
        mixins: {
            inject: string[];
            render(h: any): any;
        }[];
        props: {
            position: {
                type: (StringConstructor | ArrayConstructor)[];
                require: boolean;
            };
            color: {
                type: (StringConstructor | ObjectConstructor)[];
                validator: typeof import("../utils").optionsValidator;
            };
            shape: {
                type: (StringConstructor | ObjectConstructor)[];
                validator: typeof import("../utils").optionsValidator;
            };
            size: {
                type: (StringConstructor | ObjectConstructor)[];
                validator: typeof import("../utils").optionsValidator;
            };
            style: {
                type: ObjectConstructor;
            };
            adjust: {
                type: (StringConstructor | ArrayConstructor | ObjectConstructor)[];
            };
            animate: {
                type: (ObjectConstructor | BooleanConstructor)[];
            };
            generatePoints: {
                type: BooleanConstructor;
                default: boolean;
            };
            sortable: {
                type: BooleanConstructor;
                default: boolean;
            };
            startOnZero: {
                type: BooleanConstructor;
                default: boolean;
            };
            connectNulls: {
                type: BooleanConstructor;
                default: boolean;
            };
        };
        methods: {
            init(chart: any): void;
        };
    }[];
    created(): void;
};
export default _default;
