<template>
  <div class="mb-button">

  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import ripple from '../ripple'
Vue.use(ripple)
export default Vue.extend({
  name: 'mb-button'
})
</script>
<style>
.mb-button {
  width: auto;
  border: none;
  border-radius: 2px;
  color: #000;
  height: 36px;
  margin: 0;
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
}
</style>
