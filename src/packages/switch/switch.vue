<template>
  <div
    :class="[
      'mb mb-switch',
      size === 'big' ? 'big' : '',
      val ? 'active' : 'inactive'
    ]"
  >
    <input class="mb-hidden" type="checkbox"
      :name="name"
      :true-value="trueValue"
      :false-value="falseValue"
      @change="onchange"
      ref="input"
    >
    <label class="mb-switch-label" for=""
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
    <label class="mb-switch-label" for=""
      :style="{ color: val ? color : '#cccccc' }"
    >
      {{ activeText }}
    </label>
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
    },
    size: {
      type: String,
      default: 'small'
    },
    activeText: {
      type: String,
      default: ''
    },
    inactiveText: {
      type: String,
      default: ''
    },
    trueValue: {
      default: true
    },
    falseValue: {
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      default: null
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
  watch: {
    value(val) {
      this.val = val === this.trueValue
    },
    val(val: boolean) {
      (<HTMLInputElement>this.$refs.input).checked = val
    }
  },
  methods: {
    onclick(): void {
      if (!this.disable) {
        this.val = !this.val
      }
      const inputValue = this.val ? this.trueValue : this.falseValue
      this.$emit('input', inputValue)
    },
    onchange(value: any): void {
      this.val = !this.val
      const inputValue = this.val ? this.trueValue : this.falseValue
      this.$emit('input', inputValue)
    }
  },
  mounted() {
    this.val = this.value === this.trueValue
  }
})
</script>
<style lang="scss">
@import '../public.scss';
.mb-switch{
  display: inline-block;
  cursor: pointer;
  height: 36px;
  line-height: 36px;
  .mb-switch-label {
    float: left;
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
    transform: translate(-20px, 0);
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
