<template>
  <Container cls="flex v-center">
    <div class="b-con">
      <div class="b-text">
        <h5 class="fw-lg scroll-fade-opacity">Delivering</h5>
        <h5 class="fw-lg c-main scroll-fade-opacity fade-5">Competative</h5>
        <div class="b-ln">
          <h5 class="fw-lg c-ther scroll-fade-opacity fade-8">Custom&nbsp;</h5>
          <h5 class="fw-lg scroll-fade-opacity">Web Pages</h5>
        </div>
        <p>Integer ornare varius hendrerit. Nullam enim augue, rutrum sed elit sed, pharetra fermentum neque. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
        <VButton
          type="solid"
          gradient="gradient"
          :func="() => {console.log('test')}"
        >Contact Us</VButton>
      </div>
      <div class="b-img">

      </div>
    </div>
  </Container>
</template>

<script>
import Container from './Container.vue'
import VButton from './Button.vue'
export default {
  components: {
    Container,
    VButton
  }
}
</script>

<style scoped>
.b-con {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: inherit;
}
.b-text {
  display: inherit;
  flex-direction: column;
  flex: 1 0 49%;
  margin-right:2%;
  overflow: hidden;
}
.b-img {
  flex: 1 0 49%
}
.b-ln {
  display: inherit;
  flex-direction: row;
  margin-bottom: 15px;
}
.b-ln h5 {
  width: auto;
  /* padding-right: 15px; */
}
</style>
