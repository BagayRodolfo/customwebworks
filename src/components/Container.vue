<template>
  <div class="c-bg" :style="bg | hasBackground" :class="cls">
    <Wrapper >
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
  props: [
    'background',
    'cls'
  ],
  data () {
    return {
      bg: require(`../assets/${this.background}.png`)
    }
  },
  filters: {
    hasBackground (v) {
      return v ? `background: url(${v})` : ''
    }
  }
}
</script>

<style scoped>
.c-bg {
  width: 100%;
  min-height: 100vh;
  /* background: url(../assets/Circles.png); */
  animation-name: bgAnimate;
  animation-duration: 300s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.flex {
  display: flex;
}
.v-center {
  align-items: center;
}
.v-start {
  align-items: flex-start;
}
.v-end {
  align-items: flex-end;
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
