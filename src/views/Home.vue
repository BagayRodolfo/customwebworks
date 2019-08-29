<template>
  <div class="main-com-container">
    <Banner></Banner>
    <Benefits></Benefits>
    <Features></Features>
    <Alert
      class="home-alert"
      :css="alertStyle"
    ></Alert>
    <TalkToUsBar></TalkToUsBar>
  </div>
</template>

<script>
import Alert from '../components/Alert.vue'
import Banner from '../components/Banner.vue'
import Features from '../components/Features.vue'
import TalkToUsBar from '../components/TalkToUsBar.vue'
import Benefits from '../components/Benefits.vue'
export default {
  data () {
    return {
      alertStyle: {
        position: 'absolute',
        top: 'calc(120vh - 100px)',
        right: 'calc(100vw / 10)',
        opacity: '1'
      }
    }
  },
  components: {
    Banner,
    Features,
    Alert,
    Benefits,
    TalkToUsBar
  }
}
</script>

<style>
.main-com-container {
  padding-top: 100px;
}
.home-alert{
  display: none!important;
}
@media (min-width: 576px)  {

}
@media (min-width: 768px)  {

}
@media (min-width: 992px)  {
  .home-alert{
    display: flex!important;
  }
}
@media (min-width: 1200px) {

}
</style>
