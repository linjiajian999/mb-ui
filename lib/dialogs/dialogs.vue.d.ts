import { Vue } from "vue-property-decorator";
export default class Dialogs extends Vue {
    visiable: boolean;
    title: string;
    content: string;
    confirm: string;
    cancel: string;
    maskClickToHide: boolean | string;
    callback: ((state: string) => void) | null;
    hideCancel: boolean;
    maskClick(): void;
    show(): void;
    close(): void;
    onclick(action: string): void;
}
