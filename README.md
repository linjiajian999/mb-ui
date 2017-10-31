# mb-ui

> a vue ui-framework with typescript
## Installation
``` npm
npm i vue-mb-ui
```
## Usage
``` js
import Vue from 'vue'
import MbUi from 'mb-ui'
Vue.use(MbUi)
```
or
``` js
import Vue from 'vue'
import { Ripple, Dialogs } from 'mb-ui'
import 'mb-ui/ripple/index.css'
import 'mb-ui/dialogs/index.css'
Vue.use(Ripple.install)
Vue.use(Dialogs.install)
```
