<template>
  <Container class="flex v-center" background="none">
    <div class="b-con">
      <div class="b-img">
        <div class="b-acimg"></div>
      </div>
      <div class="b-text scroll-fade-opacity">
        <ul class="b-list">
          <li v-for="(item, index) in list" :key="index" class="l-item">
            <Cards
              pad="lg-lg"
            >
              <div class="l-icon" :style="item.icon | hasBackground"></div>
              <h6>{{item.title}}</h6>
              <p class="p-md">{{item.text}}</p>
            </Cards>

          </li>
        </ul>
      </div>
    </div>
  </Container>
</template>
<script>
import Container from '../components/Container.vue'
import Cards from '../components/Cards.vue'
export default {
  data () {
    return {
      list: [
        {
          icon: '01',
          title: 'Pariatur in minim consectetur.',
          text: 'Nisi dolore deserunt id magna aute non mollit magna eiusmod aute enim consectetur eiusmod tempor. Commodo eiusmod nostrud aliquip id qui deserunt dolor ipsum velit veniam ut elit. Consectetur minim voluptate consectetur ad ullamco Lorem.'
        }, {
          icon: '02',
          title: 'Voluptate ea mollit.',
          text: 'Amet dolor quis reprehenderit ipsum ad minim. Duis ea in mollit eiusmod. Esse in esse ut consectetur aute esse ad sit elit voluptate. Cupidatat nostrud id et quis proident.'
        }, {
          icon: '11',
          title: 'Dolor dolor.',
          text: 'Culpa dolore culpa fugiat magna cillum excepteur aliquip qui elit laboris eiusmod. Exercitation enim enim dolore elit pariatur magna incididunt esse anim sit proident tempor. Incididunt dolore mollit mollit veniam mollit mollit labore ea aliquip anim non magna cillum. Voluptate proident eu occaecat duis et id. Ut consequat ad mollit minim anim tempor.'
        }, {
          icon: '12',
          title: 'Et duis fugiat.',
          text: 'Pariatur deserunt voluptate consequat adipisicing do irure aliquip consequat veniam exercitation veniam duis. Proident ut tempor voluptate sunt ad. Anim elit esse aute magna. Irure et esse aliqua elit nisi. In sit in aute sint quis ea veniam.'
        }
      ]
    }
  },
  components: {
    Container,
    Cards
  },
  filters: {
    hasBackground (v) {
      return v ? `background: url(${require(`../assets/images/CusWorksIcons_${v}.png`)})` : ''
    }
  }
}
</script>
<style scoped>
.b-con {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: inherit;
}
.b-text {
  display: inherit;
  flex-direction: column;
  flex: 1 0 49%;
  margin-left:2%;
  /* overflow: hidden; */
}
.b-img {
  flex: 1 0 49%;
  display: inherit;
  justify-content: center;
  align-content: center;
}
.b-list {
  float: left;
  position: relative;
}
.b-list li{
  float: left;
  position: relative;
}
.l-icon {
  width: 80px;
  height: 80px;
  background-repeat: no-repeat!important;
  background-size: cover!important;
}
.l-item {
  margin: 10px 0px;
}
.b-acimg {
  min-height: calc(100vw / 1.1);
  width: calc(100vw / 1.1);
  background-blend-mode: lighten;
  background-image: url('../assets/bannerImagePerks.png');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border: 0px #fff solid;
}
@media (min-width: 576px)  {

}
@media (min-width: 768px)  {
  .b-con {
    flex-direction: row;
  }
  .b-acimg {
    min-height: calc(100vw / 2.2);
    width: 100%;
  }
}
@media (min-width: 992px)  {
  .b-acimg {
    min-height: calc(100vw / 3);
    width: 100%;
  }
}
@media (min-width: 1200px) {

}
</style>
