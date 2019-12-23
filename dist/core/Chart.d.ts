import '@antv/f2/lib/scale/time-cat';
declare const _default: {
    name: string;
    props: {
        data: {
            type: (ObjectConstructor | ArrayConstructor)[];
            require: boolean;
        };
        width: {
            type: NumberConstructor;
            default: number;
        };
        height: {
            type: NumberConstructor;
            default: number;
        };
        padding: {
            type: (ArrayConstructor | NumberConstructor | StringConstructor)[];
            default: string;
        };
        appendPadding: {
            type: NumberConstructor;
            default: number;
        };
        animate: {
            type: BooleanConstructor;
            default: boolean;
        };
        syncY: {
            type: BooleanConstructor;
            default: boolean;
        };
        defs: {
            type: ObjectConstructor;
            default: () => {};
        };
    };
    watch: {
        data(value: any): void;
    };
    created(): void;
    render(h: any): any;
    mounted(): void;
    methods: {
        get(key: any): any;
        /**
         * 清除辅助元素
         */
        clearGuide(): void;
    };
};
export default _default;
