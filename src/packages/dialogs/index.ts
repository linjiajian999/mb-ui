import Dialogs from './dialogs.vue'
import install from './dialogsInstall'

import {
  MbComponent
} from '../index'

const dialogsCompoent: MbComponent<typeof Dialogs> = {
  component: Dialogs,
  install
}
export default dialogsCompoent
