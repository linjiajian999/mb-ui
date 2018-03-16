import Vue, { PluginFunction } from 'vue'
import Dialogs from './dialogs.vue'
/**
 * interface
 */
export interface DefaultOptions {
  title: string
  confirm: string
  cancel: string
  callback: Function | null
  slot: null
  hideCancel: boolean
  [key: string]: any
}
export interface ShowOptions {
  title?: string
  confirm?: string
  cancel?: string
  callback?: Function | null
  hideCancel?: null | boolean
  [key: string]: any
}
export interface MbDialogsObj {
  show(options?: ShowOptions): Promise<string>
  close(): void
  setDefault(options: ShowOptions): void
}
export interface PromiseStack {
  resolve: Function
  reject: Function | null | undefined
}
declare module 'vue/types/vue' {
  interface Vue {
    $mbDialogs: MbDialogsObj
  }
}
/**
 * implements
 */

const defaultOptions: DefaultOptions = {
  title: '提示',
  confirm: '確定',
  cancel: '取消',
  callback: null,
  slot: null,
  hideCancel: true
}
const getDefault = function (): DefaultOptions {
  const options: any = {}
  for (let prop in defaultOptions) {
    options[prop] = defaultOptions[prop]
  }
  return options as DefaultOptions
}
const merge = function (source: DefaultOptions, target: ShowOptions): DefaultOptions {
  for (let prop in target) {
    source[prop] = target[prop]
  }
  return source
}

let showingStack: Dialogs[] = []
let promiseStack: PromiseStack[] = []

const setDialogsOptions = function(dialog: Dialogs, options?: ShowOptions) {
  let mergeOption: DefaultOptions = getDefault()
  if (typeof options === 'object') {
    mergeOption = merge(getDefault(), options) as DefaultOptions
  }

  for (let opt in mergeOption) {
    if (opt !== 'callback') {
      if (Object.hasOwnProperty.call(dialog, opt)) {
        dialog[opt] = mergeOption[opt]
      }
    }
  }

  dialog.callback = function(action: string) {
    if (action === 'close') {
      setTimeout(function() {
        document.body.removeChild(dialog.$el)
      }, 300)
    } else if (action === 'cancel' || action === 'confirm') {
      let popDialogs: Dialogs | null
      let popPromise: PromiseStack | null
      for (var i = 0; i < showingStack.length; i++) {
        popDialogs = showingStack.splice(i, 1)[0]
        popDialogs && popDialogs.close()
        if (typeof Promise !== 'undefined') {
          popPromise = promiseStack.splice(i, 1)[0]
          popPromise.resolve(action)
        }
        break
      }
    }
    if (typeof mergeOption.callback === 'function') {
      mergeOption.callback!(action)
    }
  }
  dialog.show()
}
const install: PluginFunction<any> = function (vue: typeof Vue, options?: any): void {
  const $mbDialogs: MbDialogsObj = {
    show (options?: ShowOptions): Promise<string> {
      const dialog = new Dialogs({
        el: document.createElement('div')
      })
      document.body.appendChild(dialog.$el)
      setDialogsOptions(dialog, options)
      showingStack.push(dialog)
      return new Promise(function(resolve, reject) {
        promiseStack.push({
          resolve,
          reject
        })
      })
    },
    close (): void {
      if (showingStack.length >= 1) {
        const dialog: Dialogs = showingStack.pop()!
        dialog.close()
        const promise = promiseStack.pop()
        promise!.resolve('close')
      }
    },
    setDefault(options: ShowOptions): void {
      for (let opt in options) {
        if (Object.hasOwnProperty.call(options, opt)) {
          defaultOptions[opt] = options[opt]
        }
      }
    }
  }
  if (!Vue.prototype.$mbDialogs) {
    Vue.prototype.$mbDialogs = $mbDialogs
  }
}

export default install
