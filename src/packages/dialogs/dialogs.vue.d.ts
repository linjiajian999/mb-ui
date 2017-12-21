import { Vue, Component } from "vue-property-decorator";

export default class Dialogs extends Vue{
  name: string
  // data
  visiable: boolean
  title: string
  content: string
  confirm: string
  cancel: string
  maskClickToHide: boolean | string
  callback: ((state: string) => void) | null
  hideCancel: boolean

  // methods
  maskClick: () => void
  show: () => void
  close: () => void
  onclick: () => void

  [index: string]: any
}
