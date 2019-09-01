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
        <h4 class="c-main">Premium</h4>
        <h6>pre·​mi·​um</h6>  
        <p class="p-sm">An exceptional quality or amount also : higher-priced</p>
      </div>
      <div class="c-content sub-content">
        <h4 class="c-main">Stylus</h4>
        <h6>sty·​lus</h6>
        <p class="p-sm">A pen-shaped pointing device used for entering data (such as positional information from a graphics tablet) into a computer</p>
      </div>
    </Cards>
    <Cards
      class="b-cards hover-anim flip-anim horizontal"
      height="sm"
    >
      <div class="c-content main-content">
        <h4 class="c-main">Template</h4>
        <h6>tem·​plate</h6>
        <p class="p-sm">A gauge, pattern, or mold (such as a thin plate or board) used as a guide to the form of a piece being made</p>
      </div>
      <div class="c-content sub-content">
        <h4 class="c-main">Random</h4>
        <h6>ran·​dom</h6>
        <p class="p-sm">Without definite aim, direction, rule, or method</p>
      </div>
    </Cards>
    <Cards
      class="b-cards hover-anim flip-anim horizontal"
      height="sm"
    >
      <div class="c-content main-content">
        <h4 class="c-main">Random</h4>
        <h6>ran·​dom</h6>
        <p class="p-sm">Without definite aim, direction, rule, or method</p>
      </div>
      <div class="c-content sub-content">
        <h4 class="c-main">Premium</h4>
        <h6>pre·​mi·​um</h6>  
        <p class="p-sm">An exceptional quality or amount also : higher-priced</p>
      </div>
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
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0px 30px;
  width: 100%;
  min-height: 100%;
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
