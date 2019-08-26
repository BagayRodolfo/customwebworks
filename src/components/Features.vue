<template>
  <Container cls="flex v-center">
    <div class="b-con">
      <div class="b-img">
        <div class="b-acimg"></div>
      </div>
      <div class="b-text scroll-fade-opacity">
        <ul class="b-list">
          <li v-for="(item, index) in list" :key="index" class="l-item">
            <div class="l-icon" :style="item.icon | hasBackground"></div>
            <h6>{{item.title}}</h6>
            <p>{{item.text}}</p>
          </li>
        </ul>
      </div>
    </div>
  </Container>
</template>
<script>
import Container from './Container.vue'
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
    Container
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
  flex-direction: row;
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
  min-height: calc(100vw / 2.8);
  width: calc(100vw / 2.8);
  background-blend-mode: lighten;
  background-image: url('../assets/bannerImagePerks.png');
  background-position: center;
  background-size: contain;
  border: 0px #fff solid;
  border-radius: 600px;
}
</style>
