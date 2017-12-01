<template>
  <div class="mb-input-container">
    <div class="mb-input-prepend">
      <slot name="prepend"></slot>
    </div>
    <div
      :class="['mb-input', {
        float: type === 'float',
        foucus: isFoucus,
        active: isFoucus || inputValue !== '',
        error: isShowMsg
      }]"
    >
      <input
        type="text"
        :id="'mb-input' + _uid"
        @focus="onfocus"
        @blur="onblur"
        @keyup.enter="onkeyup"
        @compositionstart="compositionstart"
        @compositionend="compositionend"
        @change="onchange"
        @input="oninput"
        v-model="inputValue"
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
<script>
export default {
  name: 'mb-input',
  props: {
    type: {
      default: 'float'
    },
    color: {
      default: '#ff00ff',
      type: String
    },
    label: {
      default: ''
    },
    value: {
      default: ''
    }
  },
  computed: {
    isShowLabel() {
      return (this.value === '' && !this.isInput) || this.type === 'float'
    }
  },
  data() {
    return {
      isFoucus: false,
      isShowMsg: false,
      inputValue: '',
      isInput: false
    }
  },
  watch: {
    value(val) {
      this.inputValue = val
    }
  },
  methods: {
    onfocus(evt) {
      this.isFoucus = true
      this.$emit('focus', evt)
    },
    onblur(evt) {
      this.isFoucus = false
      this.$emit('blur', evt)
    },
    onkeyup(evt) {
      this.$emit('enter', evt)
    },
    onchange(evt) {
      this.$emit('change', evt)
      this.$emit('input', this.inputValue)
    },
    oninput(evt) {
      this.$emit('input', this.inputValue)
    },
    compositionstart(val) {
      this.isInput = true
    },
    compositionend(val) {
      this.isInput = false
    }
  },
  mounted() {
    // console.log(this)
    let input
    for (let attr in this.$attrs) {
      if (!input) {
        input = this.$el.querySelector('input')
      }
      input.setAttribute(attr, this.$attrs[attr])
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
