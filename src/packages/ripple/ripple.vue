<template>
  <span
    class="mb mb-ripple"
    @click="click($event)"
    @mousedown="onMousedown($event)"
    @mouseout="onMouseup"
    @mouseup="onMouseup"
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
import Vue from 'vue'
// import Component from 'vue-class-component'
export default Vue.extend({
  name: 'mb-ripple',
  props: {
    color: {
      type: String,
      default: '#000'
    }
  },
  // data
  data() {
    return {
      translateX: 0,
      translateY: 0,
      isTouch: false,
      isTouchMoment: false,
      rippleW: 50
    }
  },
  computed: {
    translate(): string {
      return 'translate(-50%, -50%) translate(' + this.translateX + 'px,' + this.translateY + 'px)' + (this.isTouchMoment ? 'scale(0.01, 0.01)' : '')
    }
  },
  methods: {
    click(evt: MouseEvent): void {
      this.$emit('click', evt)
    },
    onMousedown(evt: MouseEvent): void {
      this.setMaskWidth(evt.offsetX, evt.offsetY)
      this.translateX = evt.offsetX
      this.translateY = evt.offsetY
      this.isTouch = true
      this.isTouchMoment = true
      setTimeout(_ => {
        this.isTouchMoment = false
      }, 20)
    },
    onMouseup(): void {
      this.isTouch = false
    },
    setMaskWidth(x: number, y: number): void {
      const w = this.$el.offsetWidth
      const h = this.$el.offsetHeight
      const rx = x > w / 2 ? x : w - x
      const ry = y > h / 2 ? h : h - y
      const r = Math.sqrt(rx * rx + ry * ry)
      this.rippleW = r * 2
    }
  }
})
</script>
<style lang="scss">
@import '../public.scss';
.mb-ripple {
  width: auto;
  border: none;
  position: relative;
  margin: 0;
  display: inline-block;
  overflow: hidden;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
  &-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: block;
    overflow: hidden;
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
    // background: blue;
  }
}
.mb-ripple .isAnimating {
  transition:
    transform .5s cubic-bezier(0,0,.2,1),
    width .5s cubic-bezier(0,0,.2,1),
    height .5s cubic-bezier(0,0,.2,1),
    opacity .5s cubic-bezier(0,0,.2,1);
}
.mb-ripple .visible {
  opacity: 0.38;
}
</style>
