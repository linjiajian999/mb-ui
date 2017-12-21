import { Vue } from "vue-property-decorator";
export default class Ripple extends Vue {
    color: string;
    position: string;
    scale: number;
    disable: boolean;
    translateX: number;
    translateY: number;
    isTouch: boolean;
    isTouchMoment: boolean;
    rippleW: number;
    readonly translate: string;
    click(evt: MouseEvent): void;
    onMouseover(evt: MouseEvent): void;
    onMousedown(evt: MouseEvent): void;
    onMouseup(evt: MouseEvent): void;
    setMaskWidth(x: number, y: number): void;
}
