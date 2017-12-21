import { Vue } from "vue-property-decorator";
export default class Switch extends Vue {
    color: string;
    size: string;
    disable: boolean;
    activeText: string;
    inactiveText: string;
    trueValue: boolean;
    falseValue: boolean;
    inputName: string;
    value: boolean;
    offColor: string;
    val: boolean;
    readonly toogleColor: string;
    readonly bgColor: string;
    onValueChange(value: boolean): void;
    onValChange(val: boolean): void;
    onclick(): void;
    onchange(value: any): void;
    mounted(): void;
}
