<template>
  <ContainerBar
    withWrapper="yes"
    background="clear"
    class="flex v-center"
    size="fix-size"
  >
  <Cards>
    test
  </Cards>
  </ContainerBar>
</template>

<script>
import ContainerBar from '../components/ContainerBar.vue'
import Cards from '../components/Cards.vue'

export default {
  components: {
    ContainerBar,
    Cards
  }
}
</script>

<style>

</style>
