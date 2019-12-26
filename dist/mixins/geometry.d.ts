import { optionsValidator } from '../utils';
declare const _default: {
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
            validator: typeof optionsValidator;
        };
        shape: {
            type: (StringConstructor | ObjectConstructor)[];
            validator: typeof optionsValidator;
        };
        size: {
            type: (StringConstructor | ObjectConstructor)[];
            validator: typeof optionsValidator;
        };
        styles: {
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
};
export default _default;
