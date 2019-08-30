<template>
  <div class="cb-con" :class="`${VBackground} ${Vsize}`">
    <Wrapper v-if="VwithWrapper">
      <slot></slot>
    </Wrapper>
    <slot v-else></slot>
  </div>
</template>

<script>
import Wrapper from './Wrapper.vue'
export default {
  data () {
    return {
      'VwithWrapper': this.withWrapper,
      'VBackground': this.background || 'clear',
      'Vsize': this.size || 'fix-size' // 'auto-size'
    }
  },
  components: {
    Wrapper
  },
  props: [
    'withWrapper',
    'background',
    'size'
  ]
}
</script>

<style scoped>
.cb-con {
  width: var(--container-bar-x);
}
.cb-con.fix-size {
  min-height: var(--container-bar-y);
}
.cb-con.auto-size {
  padding-top: 5%;
  padding-bottom: 5%;
}
.cb-con.clear {
  background-color: var(--theme-one-white);
}
.cb-con.dark {
  background-color: var(--theme-one-black);
}
.cb-con.light {
  background-color: var(--theme-one-light);
}
.cb-con.main {
  background-color: var(--theme-one-main);
}
.cb-con.gradient {
  background: var(--gradient);
}
</style>
