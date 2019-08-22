<template>
  <header>
    <Wrapper>
      <div class="h-con">
        <div class="h-bar">
          <div class="h-left scroll-fade-opacity fade-left">
            <div class="l-img" :style="logo"></div>
            <div class="l-text">
              <h6 class="l-title ls-none fw-xl">CUSWORKS</h6>
              <small class="l-info fw-lg">Custom Page Works</small>
            </div>
          </div>
          <div class="h-right scroll-fade-opacity fade-right">
            <ul class="m-list">
              <li class="m-con">
                <div class="m-text fw-lg">Home</div>
              </li>
              <li class="m-con">
                <div class="m-text fw-lg">Services</div>
              </li>
              <li class="m-con">
                <div class="m-text fw-lg">Templates</div>
              </li>
              <li class="m-con">
                <div class="m-text fw-lg">About Us</div>
              </li>
              <li class="m-con">
                <div class="m-text fw-lg">Pricing</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  </header>

</template>

<script>
import Wrapper from '../components/Wrapper.vue'
import fadeIn from '../utility/fadeIn'
export default {
  components: {
    Wrapper
  },
  mounted () {
    fadeIn()
  },
  data () {
    return {
      logo: `background: url(${require('../assets/logo.png')}) no-repeat;`
    }
  }
}
</script>

<style scoped>
header {
  /* box-shadow: 4px 4px 25px rgba(0,0,0,0.1); */
  background: transparent;
  position: fixed;
  width: 100%;
}
.h-con {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
}
.h-bar {
  width: 100%;
  display: inherit;
  flex-direction: row;
}
.h-left, .h-right {
  display: inherit;
  flex: 1 0 50%;
}
.h-left {
  justify-content: left;
}
.h-right {
  justify-content: right;
}
.l-img {
  min-height: 60px;
  min-width: 60px;
  background-size: contain!important;
  background-position: center;
}
.l-title {
  background: var(--gradient);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 28px;
}
.l-text {
  display: inherit;
  justify-content: center;
  flex-direction: column;
}
.l-info {
  text-align: left;
}
.m-list {
  display: inherit;
  flex-direction: row;
  width: 100%;

}
.m-con {
  display: inherit;
  flex: 1 0 10%;
  align-items: center;
}
.m-text {
  text-align: center;
}
.m-text:hover {
  color: var(--theme-one-main);
}
</style>
