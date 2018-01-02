import { Vue } from "vue-property-decorator";
export default class Input extends Vue {
    labelFloat: boolean;
    color: string;
    label: string | number;
    value: string | number;
    isFoucus: boolean;
    isShowMsg: boolean;
    inputValue: string | number;
    isInput: boolean;
    readonly isShowLabel: boolean;
    onValueChanged(val: string | number): void;
    onfocus(evt: FocusEvent): void;
    onblur(): void;
    onkeyup(evt: KeyboardEvent): void;
    onchange(evt: Event): void;
    oninput(evt: Event): void;
    compositionstart(): void;
    compositionend(): void;
    mounted(): void;
}
