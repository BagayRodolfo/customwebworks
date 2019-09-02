<template>
  <ContainerBar
    withWrapper="yes"
    background="gradient"
    class="flex v-center"
    size="fix-size"
  >
    <div class="c-con">
      <h3 class="c-white">Let's Talk?</h3>
      <div class="hazline-con">
        <h1 class="hazline white">.</h1>
      </div>
    </div>
  </ContainerBar>
</template>

<script>
import ContainerBar from '../components/ContainerBar.vue'
export default {
  components: {
    ContainerBar
  }
}
</script>

<style scoped>
.c-con {
  width: 100%;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}
.hazline-con {
  width: 0px;
  transition: width 0.7s;
}
.c-con:hover .hazline-con{
  width: 35%;
}

</style>
