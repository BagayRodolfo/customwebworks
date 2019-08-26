<template>
  <Container cls="flex v-center" background="Circles">
    <div class="b-con">
      <div class="b-text scroll-fade-opacity">
        <h5 class="fw-lg">Delivering</h5>
        <h5 class="fw-lg c-main scroll-fade-opacity bounce-in fade-5">Competative</h5>
        <div class="b-ln">
          <h5 class="fw-lg c-ther scroll-fade-opacity bounce-in fade-8">Custom&nbsp;</h5>
          <h5 class="fw-lg">Web Pages</h5>
        </div>
        <p>Integer ornare varius hendrerit. Nullam enim augue, rutrum sed elit sed, pharetra fermentum neque. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
        <VButton
          class="b-button"
          type="solid"
          gradient="gradient"
          :func="() => {console.log('test')}"
        >Contact Us</VButton>
      </div>
      <div class="b-img">
        <div class="b-acimg"></div>
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
  /* overflow: hidden; */
}
.b-text p {
  text-indent: 5%;
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
.b-button {
  margin-top: 20px;
}
.b-img {
  display: inherit;
  justify-content: center;
  align-content: center;
}
.b-acimg {
  min-height: calc(100vw / 2.8);
  width: calc(100vw / 2.8);
  background-blend-mode: lighten;
  background-image: url('../assets/bannerImage.png');
  background-position: center;
  background-size: contain;
  border: 0px #fff solid;
  border-radius: 600px;
}
</style>
