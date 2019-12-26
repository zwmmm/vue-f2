import '@antv/f2/lib/coord/polar';
declare const _default: {
    name: string;
    mixins: {
        inject: string[];
        render(h: any): any;
    }[];
    props: {
        transposed: {
            type: BooleanConstructor;
            default: boolean;
        };
        startAngle: {
            type: NumberConstructor;
            default: number;
        };
        endAngle: {
            type: NumberConstructor;
            default: number;
        };
        innerRadius: {
            type: NumberConstructor;
            default: number;
        };
        radius: {
            type: NumberConstructor;
            default: number;
        };
    };
    created(): void;
};
export default _default;
