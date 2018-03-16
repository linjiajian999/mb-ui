<template>
  <div
    class="mb-button-container"
    :is="href ? 'a' : 'div'"
    :href="href">
    <mb-ripple
      :class="[
        'mb-button',
        disable ? 'disable' : '',
        type,
        shadowClass
      ]"
      :style="{
        color: type === 'flat' ? '' : color,
        backgroundColor: backgroundColor
      }"
      @mouseover="onMouseover"
      @mousedown="onMousedown"
      @mouseout="onMouseout"
      @mouseup="onMouseup"
      @click="onclick"
      :color="rippleColor"
      :disable="disable">
      <slot></slot>
    </mb-ripple>
  </div>
</template>
<script lang="ts">
import {
  Vue,
  Component,
  Prop
} from "vue-property-decorator"
import ripple from '../ripple'
Vue.use(ripple)

enum ButtonType {
  raised = 'raised',
  flat = 'flat',
  floating = 'floating'
}

@Component({
  name: 'mb-button'
})
export default class Button extends Vue{
  @Prop({ default: ButtonType.raised})
  type: string

  @Prop({ default: ''})
  href: string

  @Prop({ default: false})
  disable: boolean

  @Prop({ default: 'rgba(0, 0, 0, .87)'})
  color: string

  @Prop({ default: ''})
  backgroundColor: string

  @Prop({ default: 'rgba(0, 0, 0, .97)'})
  rippleColor: string

  isFoucus: boolean = false
  get shadowClass(): string {
    if (this.type === ButtonType.flat) return ''
    return this.isFoucus ? 'shadow-2' : 'shadow-1'
  }
  onclick(evt: MouseEvent): void {
    this.$emit('click', evt)
  }
  onMouseover(evt: MouseEvent): void {
    this.isFoucus = true
    this.$emit('mouseover', evt)
  }
  onMousedown(evt: MouseEvent): void {
    this.isFoucus = true
    this.$emit('mousedown', evt)
  }
  onMouseout(evt: MouseEvent): void {
    this.isFoucus = false
    this.$emit('mousedown', evt)
  }
  onMouseup(evt: MouseEvent): void {
    this.isFoucus = false
    this.$emit('mousedown', evt)
  }
}
</script>
<style lang="scss">
$buttonColor: #0096eb;
$buttonBackgroundColor: #0088dd;
.mb-button {
  &-container {
    display: inline-block;
  }
  border: none;
  border-radius: 2px;
  height: 36px;
  min-width: 64px;
  padding: 0 16px;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  overflow: hidden;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  line-height: 36px;
  vertical-align: middle;
  background-color: transparent;
  &.flat {
    color: rgba(0, 0, 0, .87);
  }
  &:hover.flat {
    background-color: #dfdfdf;
  }
  &.raised, &.floating {
    background-color: $buttonColor;
  }
  &:hover.raised,  &:hover.floating{
    background-color: $buttonBackgroundColor;
  }
  &.disable.flat {
    opacity: .1;
    cursor: not-allowed;
  }
  &.disable.raised,  &.disable.floating{
    background-color: #cccccc;
  }
}
</style>
