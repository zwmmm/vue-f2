import '@antv/f2/lib/geom/line';
declare const _default: {
    name: string;
    mixins: {
        props: {
            name: {
                type: StringConstructor;
                require: boolean;
            };
            x: {
                type: StringConstructor;
                require: boolean;
            };
            y: {
                type: StringConstructor;
                require: boolean;
            };
            color: {
                type: (StringConstructor | ArrayConstructor | FunctionConstructor)[];
            };
            shape: {
                type: StringConstructor;
            };
            size: {
                type: (StringConstructor | ArrayConstructor | FunctionConstructor | NumberConstructor)[];
            };
        };
        computed: {
            components(): any;
        };
        render: (h: any) => any;
        methods: {
            init(chart: any): void;
        };
    }[];
    mounted(): void;
};
export default _default;
