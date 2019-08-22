<template>
  <div class="c-bg" :style="bg ? `background: url(${bg})` : ''" :class="cls">
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
  }
}
</script>

<style scoped>
.c-bg {
  width: 100%;
  min-height: 100vh;
  background: url(../assets/Group.png);
  background-position: center;
  background-size: contain;
  /* background-repeat: no-repeat; */
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
</style>
