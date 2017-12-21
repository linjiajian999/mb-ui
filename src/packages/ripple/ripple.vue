<template>
  <span
    :class="['mb mb-ripple', disable ? 'disable' : '']"
    @click="click($event)"
    @mouseover="onMouseover"
    @mousedown="onMousedown"
    @mouseout="onMouseup"
    @mouseup="onMouseup"
    :style="{
      overflow: position === 'center' ? 'unset' : 'hidden'
    }"
  >
    <slot></slot>
    <span class="mb-ripple-container">
      <span
        :class="['mb-ripple-content', {
          visible: isTouch,
          isAnimating: !isTouchMoment
        }]"
        :style="{
          transform: translate,
          width: rippleW + 'px',
          height: rippleW + 'px',
          backgroundColor: color
        }">
      </span>
    </span>
  </span>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator"

enum Position {
  auto = 'auto',
  center = 'center'
}

@Component({
  name: 'mb-ripple'
})
export default class Ripple extends Vue{
  @Prop({ default: '#000000' })
  color: string

  @Prop({ default: Position.auto })
  position: string

  @Prop({ default: 0 })
  scale: number

  @Prop({ default: false })
  disable: boolean

  translateX: number = 0
  translateY: number = 0
  isTouch: boolean =false
  isTouchMoment: boolean = false
  rippleW: number = 50

  get translate(): string {
    return `translate(-50%, -50%) translate(${ this.translateX }px, ${ this.translateY }px) ${(this.isTouchMoment ? 'scale(0.0001, 0.0001)' : '')}`
  }
  click(evt: MouseEvent): void {
    !this.disable && this.$emit('click', evt)
  }
  onMouseover(evt: MouseEvent): void {
    this.$emit('mouseover', evt)
  }
  onMousedown(evt: MouseEvent): void {
    if (this.disable) return
    this.setMaskWidth(evt.offsetX, evt.offsetY)
    this.isTouch = true
    this.isTouchMoment = true
    setTimeout(_ => {
      this.isTouchMoment = false
    }, 20)
    this.$emit('mousedown', evt)
  }
  onMouseup(evt: MouseEvent): void {
    if (this.disable) return
    setTimeout(_ => {
      this.isTouch = false
    }, 20)
    this.$emit('mouseup', evt)
  }
  setMaskWidth(x: number, y: number): void {
    const w = this.$el.offsetWidth
    const h = this.$el.offsetHeight
    let rx: number
    let ry: number
    let r: number
    if (this.position === Position.center) {
      rx = w / 2
      ry = h / 2
      this.translateX = rx
      this.translateY = ry
      if (this.scale > 0) {
        r = Math.sqrt(rx * rx + ry * ry) * this.scale
      } else {
        r = Math.sqrt(rx * rx + ry * ry)
      }
    } else {
      rx = x > w / 2 ? x : w - x
      ry = y > h / 2 ? h : h - y
      this.translateX = x
      this.translateY = y
      r = Math.sqrt(rx * rx + ry * ry)
    }
    this.rippleW = r * 2
  }
}
</script>

<style lang="scss">
@import '../public.scss';
.mb-ripple {
  width: auto;
  border: none;
  position: relative;
  margin: 0;
  display: inline-block;
  outline: none;
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
  &.disable {
    cursor: not-allowed;
  }
  &-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: block;
  }
  &-content {
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    transform: translate(-50%, -50%);
  }
}
.mb-ripple .isAnimating {
  transition:
    transform .5s cubic-bezier(0,0,.2,1),
    width .5s cubic-bezier(0,0,.2,1),
    height .5s cubic-bezier(0,0,.2,1),
    opacity .7s cubic-bezier(0,0,.2,1);
}
.mb-ripple .visible {
  opacity: 0.38;
}
</style>
