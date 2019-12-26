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
        position: {
            type: StringConstructor;
            default: string;
        };
        align: {
            type: StringConstructor;
            default: string;
        };
        verticalAlign: {
            type: StringConstructor;
            default: string;
        };
        itemWidth: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        showTitle: {
            type: BooleanConstructor;
            default: boolean;
        };
        titleStyle: {
            type: ObjectConstructor;
            default: () => {
                textAlign: string;
                fill: string;
                fontSize: number;
                fontWeight: string;
                textBaseline: string;
            };
        };
        offsetX: {
            type: NumberConstructor;
            default: number;
        };
        offsetY: {
            type: NumberConstructor;
            default: number;
        };
        titleGap: {
            type: NumberConstructor;
            default: number;
        };
        itemGap: {
            type: NumberConstructor;
            default: number;
        };
        itemMarginBottom: {
            type: NumberConstructor;
            default: number;
        };
        wordSpace: {
            type: NumberConstructor;
            default: number;
        };
        unCheckStyle: {
            type: ObjectConstructor;
            default: () => {
                fill: string;
            };
        };
        itemFormatter: {
            type: FunctionConstructor;
            default: (value: any) => any;
        };
        marker: {
            type: (StringConstructor | ObjectConstructor | FunctionConstructor)[];
            default: string;
        };
        valueStyle: {
            type: ObjectConstructor;
            default: () => {
                textAlign: string;
                fill: string;
                fontSize: string;
                fontWeight: string;
                textBaseline: string;
                width: number;
                height: number;
            };
        };
        nameStyle: {
            type: ObjectConstructor;
            default: () => {
                textAlign: string;
                fill: string;
                fontSize: string;
                fontWeight: string;
                textBaseline: string;
                width: number;
                height: number;
            };
        };
        joinString: {
            type: StringConstructor;
            default: string;
        };
        triggerOn: {
            type: StringConstructor;
            default: string;
        };
        selectedMode: {
            type: StringConstructor;
            default: string;
            validator(value: any): boolean;
        };
        clickable: {
            type: BooleanConstructor;
            default: boolean;
        };
        onClick: {
            type: FunctionConstructor;
            default: (e: any) => void;
        };
        custom: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
    created(): void;
};
export default _default;
