<template>
  <div class="main-com-container">
    <Banner></Banner>
    <Features></Features>
    <Alert
      :css="alertStyle"
    ></Alert>
  </div>
</template>

<script>
import Alert from '../components/Alert.vue'
import Banner from '../components/Banner.vue'
import Features from '../components/Features.vue'
export default {
  data() {
    return {
      alertStyle: {
        position: 'absolute',
        top: 'calc(100vh - 100px)',
        right: 'calc(100vw / 10)',
        opacity: '1'
      }
    }
  },
  components: {
    Banner,
    Features,
    Alert
  }
}
</script>

<style>
  .main-com-container {
    padding-top: 100px;
  }
</style>
