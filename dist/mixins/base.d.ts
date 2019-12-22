declare const _default: {
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
    };
    computed: {
        components(): any;
    };
    render: (h: any) => any;
    methods: {
        init(chart: any): void;
    };
};
export default _default;
