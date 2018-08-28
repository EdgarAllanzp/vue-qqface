<template>
  <div class="vue-qqface">
    <span class="vue-qqface-btn" @click="handleClick" ref="reference"></span>
    <div v-show="showPopper" ref="popper" class="vue-qqface-panel" v-clickoutside="hide">
      <ul class="qqface-list">
        <li class="qqface-item" 
            v-for="qqface in qqfaceList"
            :key="qqface.name">
          <span class="qqface"
                @click="pickFace(qqface)"
                :style="{background: `url(../images/qqfaces/${qqface.name}.gif)`}"
                :class="`qqface-${qqface.name}`">
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import PopperJS from 'popper.js';
import qqfaceList from './face-list';
import clickoutside from './clickoutside';
import RangeUtil from './rangeUtil';

export default {
  props: {
    selectorStr: {
      type: String,
      required: true
    }
  },

  directives: {
    clickoutside
  },

  data() {
    return {
      editArea: null,
      selection: null,
      showPopper: false,
      qqfaceList
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

    },

    hide(evt) {
      if (evt.target === this.$refs['reference']) return;
      this.showPopper = false;
    },

    hasFocus () {
      return document.activeElement === this.editArea;
    },

    saveSelection () {
      if (this.hasFocus()) {
        this.selection = RangeUtil.saveSelection();
      }
    },

    pickFace (face) {
      const img = this.getImgFace(face);
      this.insertFace(img);
      this.showPanel = false;
    },

    getImgFace (face) {
      const img = new Image();
      img.src = `../images/qqfaces/${face.name}.gif`;
      img.alt = face.name;
      img.title = face.title;
      img.className = 'qqface';
      img.dataset.symbol = face.symbol;
      return img;
    },

    insertFace (img) {
      this.editArea.focus();
      if (this.selection) {
        RangeUtil.restoreSelection(this.selection);
      }
      this.$nextTick(() => {
        RangeUtil.replaceSelection(img);
        this.editArea.focus();
        this.$emit('select');
      });
    }
  },

  mounted() {
    this.editArea = document.querySelector(this.selectorStr);
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
    padding: 8px;
    border-radius: 3px;
    border: 1px solid #e7e7e7;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  }

  .qqface-list {
    display: block;
    width: 375px;
    padding-left: 0;
    margin: 0;
  }

  .qqface-item {
    display: inline-block;
    list-style: none;
    cursor: pointer;
    border-right: 1px solid #f0f0f0;
    border-bottom: 1px solid #f0f0f0;
  }

  .qqface {
    display: block;
    width: 24px;
    height: 24px;
  }
}
</style>

