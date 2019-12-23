declare const _default: {
    mixins: {
        computed: {
            components(): any;
            plugins(): any;
        };
        render(h: any): any;
    }[];
    props: {
        name: {
            type: StringConstructor;
            require: boolean;
        };
        position: {
            type: StringConstructor;
            require: boolean;
        };
        color: {
            type: StringConstructor;
        };
        shape: {
            type: StringConstructor;
        };
        size: {
            type: (StringConstructor | NumberConstructor)[];
        };
        style: {
            type: ObjectConstructor;
        };
        adjust: {
            type: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
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
