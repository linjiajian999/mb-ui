<template>
  <div >
    <div>欢迎使用 mb-ui</div>
    hello world {{ msg }}
    <div @click="click">computed</div>
    <div>length: {{ msgTime }}</div>
    <!-- ripple -->
    <div class="title">ripple:</div>
    <mb-ripple
      color="red"
      position="auto"
    >
      <span style="width: 200px;height:100px;line-height:100px;display:inline-block">
        <div>slot</div>
      </span>
    </mb-ripple>
    <!-- input -->
    <div class="title">input:</div>
    <mb-input
      type="text"
      label="labe254566l"
      style="width: 240px;margin: 0 auto"
      v-model="inputValue"
    ></mb-input>
    <div> input value: {{ inputValue }} </div>
    <mb-button
      ripple-color="#fff"
      color="#fff"
      @click="changeInputValue">
      change input value
    </mb-button>
    <!-- switch -->
    <div class="title">switch:</div>
    <mb-switch
      color="#9c27b0"
      size="big"
      active-text="true"
      inactive-text="false"
      true-value="123"
      false-value="456"
      name="value"
      v-model="switchValue"
      :disable="!switchEnable"
    ></mb-switch>
    <div>
      switch: {{ switchValue }}
    </div>
    <div @click="changeSwitch">
      click to change switch value
    </div>
     <div @click="enableSwitch">
      click to {{ switchEnable ? 'disable' : 'enable' }} switch
    </div>
    <!-- button -->
    <div class="title">button:</div>
    <mb-button
      color="rgba(255, 255, 255, .87)"
      background-color="#29b6f6"
      ripple-color="#fff"
      type="raised"
      :disable="false"
    >
      123
    </mb-button>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
@Component
export default class HelloWord extends Vue{
  msg: string = ''
  msgSetTime: number = 0
  inputValue: string | number = '456'
  switchValue: string = '123'
  switchEnable: boolean = true

  get msgTime (): number {
    return this.msg.length
  }
  click (evt: MouseEvent): void {
    this.msg += '!'
    this.$mbDialogs.show({
      title: 'dialogs 提示',
      content: 'dialogs content'
    }).then((action: string) => {
      console.log(action)
    })
  }
  changeInputValue(): void {
    this.inputValue += '+'
  }
  changeSwitch(): void {
    this.switchValue = this.switchValue === '123' ? '456' : '123'
  }
  enableSwitch(): void {
    this.switchEnable = !this.switchEnable
  }
}
</script>
<style>
.title {
  font-size: 24px;
  font-weight: 500;
  text-align: left;
}
</style>
