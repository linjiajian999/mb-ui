<template>
  <div class="mb mb-switch">
    <!-- <input type="text"> -->
    <div class="mb-switch-container">
      <span class="mb-switch-toogle"
        :style="{
          backgroundColor: toogleColor
        }"
      ></span>
      <mb-ripple
        :class="[
          'mb-switch-button shadow-1',
          !val ? 'mb-switch-button-inactive' : ''
        ]"
        position="center"
        :color="val ? color : '#aaa'"
        :scale="1.7"
        :style="{
          backgroundColor: bgColor
        }"
        @click="onclick"
      >
      </mb-ripple>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import ripple from '../ripple'
Vue.component('mb-ripple', ripple)
export default Vue.extend({
  name: 'mb-switch',
  props: {
    color: {
      type: String,
      default: '#3367d6'
    },
    disable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      offColor: '#eee',
      val: true
    }
  },
  computed: {
    toogleColor(): string {
      return this.val ? this.color : '#000'
    },
    bgColor(): string {
      return this.val ? this.color : this.offColor
    }
  },
  methods: {
    onclick(): void {
      // console.log('click')
      if (!this.disable) {
        this.val = !this.val
      }
    }
  }
})
</script>
<style lang="scss">
@import '../public.scss';
.mb-switch{
  display: inline-block;
  width: 36px;
  height: 48px;
  cursor: pointer;
  user-select: none;
  &-container {
    position: relative;
    margin: 18px 1px;
  }
  &-toogle {
    position: absolute;
    left: 0;
    top: 0;
    display: inline-block;
    width: 28px;
    height: 12px;
    border-radius: 12px;
    opacity: .38;
    // background-color: #c6dafc;
  }
  &-button {
    display: inline-block;
    position: absolute;
    right: 0;
    top: -2px;
    width: 16px;
    height: 16px;
    transition: .3s;
    // background-color: #3367d6;
    border-radius: 50%;
    &-inactive {
      transform: translate(-20px, 0);
    }
  }
}
</style>
