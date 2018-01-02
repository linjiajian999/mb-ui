<template>
  <div class="mb-input-container">
    <div class="mb-input-prepend">
      <slot name="prepend"></slot>
    </div>
    <div
      :class="['mb-input', {
        float: labelFloat,
        foucus: isFoucus,
        active: isFoucus || inputValue !== '',
        error: isShowMsg
      }]"
    >
      <input
        type="text"
        :id="'mb-input' + _uid"
        v-model="inputValue"
        ref="input"
        @focus="onfocus"
        @blur="onblur"
        @keyup.enter="onkeyup"
        @compositionstart="compositionstart"
        @compositionend="compositionend"
        @change="onchange"
        @input="oninput"
      >
      <label v-show="isShowLabel" class="mb-input-label" :for="'mb-input' + _uid">
        {{ label }}
      </label>
      <div class="mb-input-msg error" v-if="isShowMsg">error</div>
    </div>
    <div class="mb-input-line-default mb-input-line"></div>
    <div :class="['mb-input-line', {
      foucus: isFoucus
    }]"></div>
    <div class="mb-input-append">
      <slot name="append"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator"
@Component({
  name: 'mb-input'
})
export default class Input extends Vue {
  @Prop({ default: true })
  labelFloat: boolean

  @Prop({ default: 'ff00ff' })
  color: string

  @Prop({ default: '', type: [String, Number] })
  label: string | number

  @Prop({ default: '', type: [String, Number] })
  value: string | number

  isFoucus: boolean = false
  isShowMsg: boolean = false
  inputValue: string | number = this.value
  isInput: boolean = false

  get isShowLabel(): boolean {
    return (this.value === '' && !this.isInput) || this.labelFloat
  }
  @Watch('value')
  onValueChanged(val: string | number): void {
    this.inputValue = val
  }

  onfocus(evt: FocusEvent): void {
    this.isFoucus = true
    this.$emit('focus', evt)
  }
  onblur(): void {
    this.isFoucus = false
    this.$emit('blur')
  }
  onkeyup(evt: KeyboardEvent): void {
    this.$emit('enter', evt)
  }
  onchange(evt: Event) : void {
    this.$emit('change', evt)
    this.$emit('input', this.inputValue)
  }
  oninput(evt: Event) : void {
    this.$emit('input', this.inputValue)
  }
  compositionstart() : void {
    this.isInput = true
  }
  compositionend() : void {
    this.isInput = false
  }
  mounted() {
    for (let attr in this.$attrs) {
      (<Element>this.$refs.input).setAttribute(attr, this.$attrs[attr])
      console.log(`${attr} : ${this.$attrs[attr]}`)
    }
  }
}
</script>
<style lang="scss">
$defaultColor: #6091f3;
$deltaY: 16px;
$errorColor: #d50000;
.mb-input-container {
  display: flex;
  position: relative;
}
.mb-input {
  position: relative;
  margin-top: 16px;
  flex: 1;
  &-prepend, &-append {
    height: 36px;
    line-height: 36px;
    margin-top: 16px;
  }
  &-prepend > *, &-append > * {
    min-width: 36px;
  }
  &-icon {
    display: inline-block;
    height: auto;
    width: auto;
    max-height: 32px;
    max-width: 32px;
    position: absolute;

  }
  & input{
    padding: 8px 0;
    margin-bottom: 16px;
    width: 100%;
    appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 0;
    border: 0;
    box-sizing: border-box;
    color: #1f2d3d;
    display: inline-block;
    font-size: inherit;
    height: 36px;
    line-height: 1;
    outline: none;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  }
  & input[disabled] {
    cursor: not-allowed;
  }
  & input[disabled] + &-label {
    color: #ccc;
  }
  &-label {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate3d(0, -50%, 0) translateY(- $deltaY / 2);
    pointer-events: none;
    transition: .3s;
    color: $defaultColor;
    will-change: transform color top;
    transform-origin: 0 100%;
  }
  &.error &-label {
    color: $errorColor;
  }
  &.float.active &-label{
    top: 0;
    transform: translate3d(0, -100%, 0) scale(.8);
    transition: .3s;
  }
  .mb-input-container &-line-default {
    height: 0;
    width: 100%;
    border-bottom: 1px solid #ccc;
  }
  .mb-input-container[disabled] &-line-default {
    height: 0;
    background-color: transparent;
    border-bottom: 1px dotted #ccc;
  }
  &-line{
    display: block;
    position: absolute;
    left: 50%;
    top: 100%;
    height: 2px;
    width: 0;
    background-color: $defaultColor;
    transform: translate(-50%, -1px) translateY(-$deltaY);
    transition: width .2s;
  }
  &.error &-line {
    background-color: $errorColor;
  }
  &-line.foucus {
    width: 100%;
  }
  &-msg {
    position: absolute;
    left: 0;
    top: calc(100% - 16px);
    color: $errorColor;
  }
}
</style>
