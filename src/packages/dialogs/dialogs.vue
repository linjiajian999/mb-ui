<template>
  <transition name="mb-dialogs-ani">
    <div class="mb-dialogs-container" v-if="visiable">
      <div class="mb-dialogs-mask" @click="maskClick"></div>
      <div class="mb-center mb-dialogs">
        <div class="mb-dialogs-title">
          {{ title }}
        </div>
        <div class="mb-dialogs-content">
          {{ content }}
        </div>
        <div class="mb-dialogs-bottom">
          <mb-ripple v-if="!hideCancel" class="mb-dialogs-button" @click="onclick('cancel')">{{ cancel }}</mb-ripple>
          <mb-ripple class="mb-dialogs-button" @click="onclick('confirm')">{{ confirm }}</mb-ripple>
        </div>
      </div>
    </div>
  </transition>
</template>
<script lang="ts">
import Vue from 'vue'
import ripple from '../ripple'
// Vue.component('mb-ripple', ripple)
// import Component from 'vue-class-component'
export default Vue.extend({
  name: 'mb-dialogs',
  data() {
    return {
      visiable: true,
      title: '提示',
      content: '内容文字',
      confirm: '確定',
      cancel: '取消',
      maskClickToHide: false,
      callback: null,
      classObj: null,
      hideCancel: true
    }
  },
  methods: {
    // methods
    maskClick (): void {
      this.maskClickToHide && this.close()
    },
    show (): void {
      this.visiable = true
      this.callback && this.callback!('show')
    },
    close (): void {
      this.visiable = false
      this.callback && this.callback!('close')
    },
    onclick (action: string): void {
      this.callback && this.callback!(action)
    }
  }
})
</script>
<style lang="scss">
@import '../public.scss';
$z5: 500;
$aniDuration: .3s;
.mb-dialogs-container, .mb-dialogs-mask {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
.mb-dialogs-container {
  z-index: $z5 + 1;
}
.mb-dialogs-mask {
  background-color: rgba(0, 0, 0, 0.5);
  // will-change: opacity;
  transition: opacity $aniDuration;
  opacity: 1;
}

.mb-dialogs {
  position: absolute;
  min-width: 256px;
  max-width: 80%;
  background-color: #fff;
  display: inline-block;
  border-radius: 2px;
  transition: transform $aniDuration ease;
  transform-origin: left top;
  box-shadow:
    0 3px 7px 1px rgba(0, 0, 0, 0.19),
    0 10px 10px 0 rgba(0, 0, 0, 0.19),
    0 6px 3px 0 rgba(0, 0, 0, 0.23);
  &-title {
    padding: 24px 24px 0px 24px;
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 500;
    text-align: left;
    letter-spacing: 0.005em;
  }
  &-content {
    padding: 0 24px 20px 24px;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.71);
  }
  &-bottom {
    padding: 8px 8px 8px 24px;
    text-align: right;
    font-size: 0;
  }
  &-button {
    height: 36px;
    line-height: 36px;
    vertical-align: middle;
    border-radius: 2px;
    min-width: 64px;
    padding: 0 8px;
    margin-left: 8px;
    font-size: 14px;
    color: #2196f3;
    cursor: pointer;
  }
  &-button:hover {
    background-color: rgba(153, 153, 153, 0.2);
  }
}

.mb-dialogs-ani {
  &-enter, &-leave-to {
    opacity: 0;
    transition: $aniDuration;
  }
  &-enter .mb-dialogs, &-leave-to .mb-dialogs{
    transform: scale(.9) translate(-50%, -50%);
  }
  &-enter-to, &-leave {
    opacity: 1;
    transition: $aniDuration;
  }
  &-enter-to .mb-dialogs, &-leave .mb-dialogs{
    transform: scale(1) translate(-50%, -50%);
  }
}
</style>
