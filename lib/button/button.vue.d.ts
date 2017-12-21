import { Vue } from "vue-property-decorator";
export default class Button extends Vue {
    type: string;
    href: string;
    disable: boolean;
    color: string;
    backgroundColor: string;
    rippleColor: string;
    isFoucus: boolean;
    readonly shadowClass: string;
    onclick(evt: MouseEvent): void;
    onMouseover(evt: MouseEvent): void;
    onMousedown(evt: MouseEvent): void;
    onMouseout(evt: MouseEvent): void;
    onMouseup(evt: MouseEvent): void;
}
