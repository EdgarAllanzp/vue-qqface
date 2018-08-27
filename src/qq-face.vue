<template>
  <div class="vue-qqface">
    <span class="vue-qqface-btn" @click="handleClick" ref="reference"></span>
    <div v-show="showPopper" ref="popper" class="vue-qqface-panel">
      2333
    </div>
  </div>
</template>

<script>
import PopperJS from 'popper.js';

export default {
  props: {
  },

  data() {
    return {
      showPopper: false
    };
  },

  watch: {
    showPopper(val) {
      val ? this.updatePopper() : this.destroyPopper();
    }
  },

  methods: {
    handleClick() {
      this.showPopper = !this.showPopper;
    },

    createPopper() {
      const popper = this.$refs['popper'];
      const reference = this.$refs['reference'];
      this.popperJS = new PopperJS(reference, popper, {});
    },

    updatePopper() {
      this.createPopper();
    },

    destroyPopper() {

    }
  }
};
</script>

<style lang="scss">
.vue-qqface {
  position: relative;

  &-btn {
    $btnSize: 16px;
    display: inline-block;
    width: $btnSize;
    height: $btnSize;
    background: no-repeat url('../images/trigger-btn.png');
    background-size: $btnSize $btnSize;
    cursor: pointer;
  }

  &-panel {
    position: absolute;
    top: 0;
    left: 0;
    padding: 2px 8px;
    border-radius: 3px;
    border: 1px solid #e7e7e7;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  }
}
</style>

