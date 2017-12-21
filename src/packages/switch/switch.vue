<template>
  <div
    :class="[
      'mb mb-switch',
      size === 'big' ? 'big' : '',
      val ? 'active' : 'inactive',
      disable? 'disable' : ''
    ]"
  >
    <input class="mb-hidden" type="checkbox"
      :name="inputName"
      :true-value="trueValue"
      :false-value="falseValue"
      @change="onchange"
      ref="input"
      :disabled="disable"
      :id="`mb-switch-${_uid}`"
    >
    <label class="mb-switch-label"
      :for="`mb-switch-${_uid}`"
      :style="{ color: !val ? color : '#cccccc' }"
    >{{ inactiveText }}</label>
    <div
      class="mb-switch-container"
      @click="onclick"
    >
      <span class="mb-switch-toogle"
        :style="{
          backgroundColor: toogleColor
        }"
      ></span>
      <mb-ripple
        class="mb-switch-button shadow-1"
        position="center"
        :color="val ? color : '#aaaaaa'"
        :scale="1.7"
        :style="{
          backgroundColor: bgColor
        }"
      >
      </mb-ripple>
    </div>
    <label class="mb-switch-label"
      :for="`mb-switch-${_uid}`"
      :style="{ color: val ? color : '#cccccc' }"
    >
      {{ activeText }}
    </label>
    <div class="mb-switch-mask"></div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator"
import ripple from '../ripple'
Vue.use(ripple)
@Component({
  name: 'mb-switch'
})
export default class Switch extends Vue{

  @Prop({ default: '#3367d6' })
  color: string

  @Prop({ default: 'big' })
  size: string

  @Prop({ default: false })
  disable: boolean

  @Prop({ default: '' })
  activeText: string

  @Prop({ default: '' })
  inactiveText: string

  @Prop({ default: true })
  trueValue: boolean

  @Prop({ default: false })
  falseValue: boolean

  @Prop({ default: '' })
  inputName: string

  @Prop({ default: false })
  value: boolean

  // data
  offColor: string = '#eee'
  val: boolean = true

  get toogleColor(): string {
    return this.val ? this.color : '#000'
  }
  get bgColor(): string {
    return this.val ? this.color : this.offColor
  }

  @Watch('value')
  onValueChange(value: boolean) {
    this.val = value === this.trueValue
  }
  @Watch('val')
  onValChange(val: boolean) {
    (<HTMLInputElement>this.$refs.input).checked = val
  }

  // methods
  onclick(): void {
    if (!this.disable) {
      this.val = !this.val
      const inputValue = this.val ? this.trueValue : this.falseValue
      this.$emit('input', inputValue)
    }
  }
  onchange(value: any): void {
    this.val = !this.val
    const inputValue = this.val ? this.trueValue : this.falseValue
    this.$emit('input', inputValue)
  }
  mounted(): void {
    this.val = this.value === this.trueValue
  }
}
</script>
<style lang="scss">
@import '../public.scss';
.mb-switch{
  display: inline-block;
  position: relative;
  cursor: pointer;
  height: 36px;
  line-height: 36px;
  &.disable {
    opacity: 0.38;
    cursor: not-allowed;
  }
  &-mask {
    display: none;
  }
  &.disable &-mask {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .mb-switch-label {
    float: left;
    cursor: pointer;
  }
  &-container {
    position: relative;
    float: left;
    width: 36px;
    height: 16px;
    margin: 8px 12px 8px;
  }
  .big &-container {
    height: 20px;
  }
  &-toogle {
    position: absolute;
    left: 0;
    top: 2px;
    display: inline-block;
    width: 28px;
    height: 12px;
    border-radius: 12px;
    opacity: .38;
  }
  .big &-toogle {
    top: 3px;
    width: 34px;
    height: 14px;
    border-radius: 14px;
  }
  &-button {
    display: inline-block;
    position: absolute;
    right: 0;
    width: 16px;
    height: 16px;
    transition: .3s;
    border-radius: 50%;
  }
  .inactive &-button {
    transform: translate(-28px, 0);
  }
  .big &-button {
    width: 20px;
    height: 20px;
    transform: translate(3px, 0);
  }
  .inactive.big &-button {
    transform: translate(-20px, 0);
  }

}
</style>
