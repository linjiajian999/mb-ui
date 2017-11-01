<template>
  <div >
    <div>欢迎使用 mb-ui</div>
    hello world {{ msg }}
    <div @click="click">computed</div>
    <div>length: {{ msgTime }}</div>
    <mb-ripple style="margin-top:50px" color="red">
      <div style="width: 200px;height:100px;line-height:100px;">slot</div>
    </mb-ripple>
    <mb-input
      label="label"
    ></mb-input>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component({
  watch: {
    msg () {
      console.log('change')
    }
  }
})
export default class HelloWorld extends Vue {
  msg: string = ''
  msgSetTime: number = 0
  click (evt: any): void {
    this.msg += '!'
    this.$mbDialogs.show()
  }
  get msgTime (): number {
    return this.msg.length
  }
}
</script>
