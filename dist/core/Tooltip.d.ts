declare const _default: {
    naem: string;
    mixins: {
        inject: string[];
        render(h: any): any;
    }[];
    props: {
        alwaysShow: {
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
        triggerOn: {
            type: (ArrayConstructor | StringConstructor)[];
            default: () => string[];
        };
        triggerOff: {
            type: (ArrayConstructor | StringConstructor)[];
            default: string;
        };
        showTitle: {
            type: BooleanConstructor;
            default: boolean;
        };
        showCrosshairs: {
            type: BooleanConstructor;
            default: boolean;
        };
        crosshairsStyle: {
            type: ObjectConstructor;
            default: () => {
                stroke: string;
                lineWidth: number;
            };
        };
        showTooltipMarker: {
            type: BooleanConstructor;
            default: boolean;
        };
        tooltipMarkerStyle: {
            type: ObjectConstructor;
            default: () => {
                fill: string;
            };
        };
        background: {
            type: ObjectConstructor;
            default: () => {
                radius: number;
                fill: string;
                padding: number[];
            };
        };
        titleStyle: {
            type: ObjectConstructor;
            default: () => {
                fontSize: number;
                fill: string;
                textAlign: string;
                textBaseline: string;
            };
        };
        nameStyle: {
            type: ObjectConstructor;
            default: () => {
                fontSize: number;
                fill: string;
                textAlign: string;
                textBaseline: string;
            };
        };
        valueStyle: {
            type: ObjectConstructor;
            default: () => {
                fontSize: number;
                fill: string;
                textAlign: string;
                textBaseline: string;
            };
        };
        showItemMarker: {
            type: BooleanConstructor;
            default: boolean;
        };
        itemMarkerStyle: {
            type: ObjectConstructor;
            default: () => {
                radius: number;
                symbol: string;
                lineWidth: number;
                stroke: string;
            };
        };
        crosshairsType: {
            type: StringConstructor;
            default: string;
            validator(value: any): boolean;
        };
        showXTip: {
            type: BooleanConstructor;
            default: boolean;
        };
        showYTip: {
            type: BooleanConstructor;
            default: boolean;
        };
        xTip: {
            type: (ObjectConstructor | FunctionConstructor)[];
            default: (value: any) => any;
        };
        yTip: {
            type: (ObjectConstructor | FunctionConstructor)[];
            default: (value: any) => any;
        };
        xTipBackground: {
            type: ObjectConstructor;
            default: () => {};
        };
        yTipBackground: {
            type: ObjectConstructor;
            default: () => {};
        };
        snap: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
    created(): void;
};
export default _default;
