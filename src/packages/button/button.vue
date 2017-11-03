<template>
  <div class="mb-button-container"
    :is="href ? 'a' : 'div'"
    :href="href"
  >
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
      color="rgba(0, 0, 0, .97)"
      :disable="disable"
    >
      <slot></slot>
    </mb-ripple>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import ripple from '../ripple'
Vue.use(ripple)
enum ButtonType {
  raised = 'raised',
  flat = 'flat',
  floating = 'floating'
}
export default Vue.extend({
  name: 'mb-button',
  props: {
    color: {
      type: String,
      default: 'rgba(0, 0, 0, .87)'
    },
    backgroundColor: {
      type: String,
      default: ''
    },
    rippleColor: {
      type: String,
      default: ''
    },
    disable: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'raised'
    },
    href: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isFoucus: false
    }
  },
  computed: {
    shadowClass(): string {
      if (this.type === ButtonType.flat) return ''
      return this.isFoucus ? 'shadow-2' : 'shadow-1'
    }
  },
  methods: {
    onclick(evt: MouseEvent): void {
      this.$emit('click', evt)
    },
    onMouseover(evt: MouseEvent): void {
      this.isFoucus = true
      this.$emit('mouseover', evt)
    },
    onMousedown(evt: MouseEvent): void {
      this.isFoucus = true
      this.$emit('mousedown', evt)
    },
    onMouseout(evt: MouseEvent): void {
      this.isFoucus = false
      this.$emit('mousedown', evt)
    },
    onMouseup(evt: MouseEvent): void {
      this.isFoucus = false
      this.$emit('mousedown', evt)
    }
  }
})
</script>
<style lang="scss">
$buttonColor: #0096eb;
$buttonBackgroundColor: #0088dd;
.mb-button {
  &-container {
    display: inline-block;
  }
  width: auto;
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
