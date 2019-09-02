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
      'VBackground': this.background,
      'Vsize': this.size
    }
  },
  components: {
    Wrapper
  },
  props: {
    /**
     * Enable magrine wrapper.<br>
     * Options: 'yes', true, false
     */
    withWrapper: {
      type: [String, Boolean],
      default: true
    },
    /**
     * Background color based on the global colors.<br>
     * Options: clear, dark, light, main, gradient
     */
    background: {
      type: String,
      default: 'clear'
    },
    size: {
      type: String,
      default: 'fix-size'
    }
  }
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
  padding-top: 10%;
  padding-bottom: 10%;
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
