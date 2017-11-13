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
    <mb-input label="label" style="width: 240px;margin: 0 auto"></mb-input>
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
      :disable="switchEable"
    ></mb-switch>
    <div>
      switch: {{ switchValue }}
    </div>
    <div @click="changeSwitch">
      click to change switch value
    </div>
     <div @click="enableSwitch">
      click to enable switch
    </div>
    <!-- button -->
    <div class="title">button:</div>
    <mb-button
      color="rgba(255, 255, 255, .87)"
      background-color="#29b6f6"
      type="raised"
      :disable="false"
    >
      123
    </mb-button>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      msg: '',
      msgSetTime: 0,
      switchValue: '123',
      switchEable: true
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
    changeSwitch(): void {
      this.switchValue = this.switchValue === '123' ? '456' : '123'
    },
    enableSwitch(): void {
      this.switchEable = !this.switchEable
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
