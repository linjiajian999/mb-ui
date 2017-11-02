<template>
  <div >
    <div>欢迎使用 mb-ui</div>
    hello world {{ msg }}
    <div @click="click">computed</div>
    <div>length: {{ msgTime }}</div>
    <div class="title">ripple:</div>
    <mb-ripple
      color="red"
      position="auto"
    >
      <span style="width: 200px;height:100px;line-height:100px;display:inline-block">slot</span>
    </mb-ripple>
    <div class="title">input:</div>
    <mb-input label="label"></mb-input>
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
    ></mb-switch>
    <div>
      switch: {{ switchValue }}
    </div>
    <div @click="changeSwitch">
      click to change switch value
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      msg: '',
      msgSetTime: 0,
      switchValue: '123'
    }
  },
  computed: {
    msgTime (): number {
      return this.msg.length
    }
  },
  methods: {
    click (evt: any): void {
      this.msg += '!'
      this.$mbDialogs.show()
    },
    changeSwitch() {
      this.switchValue = this.switchValue === '123' ? '456' : '123'
    }
  }
})
</script>
<style>
.title {
  font-size: 24px;
  font-weight: 500;
  text-align: left;
}
</style>
