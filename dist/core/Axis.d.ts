declare const _default: {
    name: string;
    mixins: {
        inject: string[];
        render(h: any): any;
    }[];
    props: {
        name: {
            type: StringConstructor;
            require: boolean;
        };
        line: {
            type: ObjectConstructor;
            default: () => {};
        };
        label: {
            type: (ObjectConstructor | FunctionConstructor)[];
            default: () => {};
        };
        grid: {
            type: (ObjectConstructor | FunctionConstructor)[];
            default: () => {};
        };
        tickLine: {
            type: ObjectConstructor;
            default: () => {};
        };
        position: {
            type: StringConstructor;
            default: string;
        };
    };
    created(): void;
};
export default _default;
