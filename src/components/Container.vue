<template>
  <div class="c-bg" :style="bg | hasBackground">
    <Wrapper >
      <!-- @slot Any content -->
      <slot></slot>
    </Wrapper>
  </div>
</template>

<script>
import Wrapper from './Wrapper.vue'
export default {
  components: {
    Wrapper
  },
  props: {
    /**
     * Image file. Only PNG.
     */
    background: {
      type: String,
      default: 'Circles'
    }
  },
  data () {
    return {
      bg: require(`../assets/${this.background}.png`)
    }
  },
  filters: {
    hasBackground (v) {
      if (v === 'none') {
        return ''
      }
      return v ? `background: url(${v})` : ''
    }
  }
}
</script>

<style scoped>
.c-bg {
  width: var(--container-x);
  min-height: var(--container-y);
  /* background: url(../assets/Circles.png); */
  animation-name: bgAnimate;
  animation-duration: 300s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@keyframes bgAnimate {
  0% {
    background-position-x: 0px;
  }
  100% {
    background-position-x: 2000px;
  }
}
</style>
