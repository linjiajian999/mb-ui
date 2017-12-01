import Vue, { PluginFunction } from 'vue'
export declare interface MbDialogsClass extends Vue {
  callback: Function | null
  show(): void
  close(): void
  [key: string]: any
}
export declare interface DefaultOptions {
  title: string
  confirm: string
  cancel: string
  callback: null
  slot: null
  hideCancel: boolean
  [key: string]: any
}
export declare interface ShowOptions {
  title?: string
  confirm?: string
  cancel?: string
  callback?: Function | null
  hideCancel?: null | boolean
  [key: string]: any
}
export declare interface MbDialogsObj {
  show(options?: ShowOptions): Promise<string>
  close(): void
  setDefault(options: ShowOptions): void
}
export declare interface dialogsPlugin {
  Dialogs: MbDialogsClass
  install: PluginFunction<any>
}
declare module 'vue/types/vue' {
  interface Vue {
    $mbDialogs: MbDialogsObj
  }
}
export default dialogsPlugin
