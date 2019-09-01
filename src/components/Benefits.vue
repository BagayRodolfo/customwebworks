<template>
  <ContainerBar
    withWrapper="yes"
    background="clear"
    class="flex v-center"
    size="auto-size"
  >
  <div class="c-con">
    <Cards
      class="b-cards hover-anim flip-anim horizontal"
      height="sm"
    >
      <div class="c-content main-content">
        <h6>main</h6>
        <p>Ex esse commodo aliqua eiusmod. Adipisicing laborum dolore magna do magna. Aute voluptate irure officia aute magna ipsum anim laboris nisi nulla aliqua duis aliqua. Irure nisi officia consectetur laboris officia minim tempor ut consequat. Proident eu et et sint veniam sunt fugiat voluptate aute consequat minim amet aliquip non. Nostrud fugiat proident ad do do aliquip dolor labore cillum aliquip elit. Qui ipsum id id qui nisi occaecat quis do excepteur.</p>
      </div>
      <div class="c-content sub-content">
        <h6>sub</h6>
        <h6>Test Lorem Ipsum</h6>
      </div>
    </Cards>
    <Cards
      class="b-cards hover-anim flip-anim horizontal"
      height="sm"
    >

    </Cards>
    <Cards
      class="b-cards hover-anim flip-anim horizontal"
      height="sm"
    >

    </Cards>
  </div>
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

<style scoped>
.c-con {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.b-cards {
  margin-bottom: 20px;
}
.c-content {
  padding: 0px 20px;
}
.c-content h6 {
  padding-bottom: 30px;
}
@media (min-width: 576px)  {

}
@media (min-width: 768px)  {
  .c-con {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
  }
}
@media (min-width: 992px)  {
  
}
@media (min-width: 1200px) {

}
</style>
