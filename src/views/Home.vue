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
    <Tabs
      selection="tabone"
    >
      <template slot="tabone">
        <h4>Test Tab 1</h4>
        <p class="p-md">Fugiat mollit aute exercitation dolor voluptate voluptate id pariatur ex magna. Occaecat minim mollit aliqua et et mollit cillum non deserunt aliquip. Officia veniam nisi sint cupidatat magna duis velit nulla eiusmod. Id Lorem deserunt reprehenderit anim in ipsum dolore duis. Magna proident aute consectetur adipisicing sint eu magna. Dolor exercitation culpa consequat sunt ullamco laborum occaecat adipisicing sunt enim commodo anim reprehenderit. Qui laborum aliqua excepteur veniam adipisicing qui.</p>
      </template>
      <template slot="tabtwo">
        <h4>Test tab 2</h4>
        <p class="p-md">Occaecat sunt excepteur voluptate excepteur irure exercitation aliqua qui excepteur dolore esse. Ex voluptate ullamco cillum laborum quis exercitation incididunt tempor eiusmod Lorem consectetur culpa commodo et. Ut deserunt voluptate aliquip et esse minim. Aliqua quis aliquip ullamco exercitation mollit excepteur aute est est. Consequat excepteur tempor non amet quis ullamco adipisicing in duis. Exercitation do ad incididunt voluptate laborum veniam do dolore consequat fugiat excepteur.</p>
      </template>
    </Tabs>
  </div>
</template>

<script>
import Alert from '../components/Alert.vue'
import Banner from '../components/Banner.vue'
import Features from '../components/Features.vue'
import TalkToUsBar from '../components/TalkToUsBar.vue'
import Benefits from '../components/Benefits.vue'
import Tabs from '../components/Tabs.vue'
export default {
  data () {
    return {
      alertStyle: {
        position: 'absolute',
        top: 'calc(120vh - 100px)',
        right: 'calc(100vw / 10)'
      }
    }
  },
  components: {
    Banner,
    Features,
    Alert,
    Benefits,
    TalkToUsBar,
    Tabs
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
