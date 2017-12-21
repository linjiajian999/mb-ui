import { PluginFunction } from 'vue';
/**
 * interface
 */
export interface DefaultOptions {
    title: string;
    confirm: string;
    cancel: string;
    callback: null;
    slot: null;
    hideCancel: boolean;
    [key: string]: any;
}
export interface ShowOptions {
    title?: string;
    confirm?: string;
    cancel?: string;
    callback?: Function | null;
    hideCancel?: null | boolean;
    [key: string]: any;
}
export interface MbDialogsObj {
    show(options?: ShowOptions): Promise<string>;
    close(): void;
    setDefault(options: ShowOptions): void;
}
export interface PromiseStack {
    resolve: Function;
    reject: Function | null | undefined;
}
declare module 'vue/types/vue' {
    interface Vue {
        $mbDialogs: MbDialogsObj;
    }
}
declare const install: PluginFunction<any>;
export default install;
