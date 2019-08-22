<template>
  <header>
    <Wrapper>
      <div class="h-con">
        <div class="h-bar">
          <div class="h-left scroll-fade-opacity fade-left">
            <div class="l-img"></div>
            <div class="l-text">
              <h6 class="l-title ls-none fw-lg">CWORKS</h6>
              <p class="l-info fw-lg">Custom Page Works</p>
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
  }
}
</script>

<style lang="scss">
@import '../assets/css/vars.scss';
.h-con {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  .h-bar {
    width: 100%;
    display: inherit;
    flex-direction: row;
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
  }

  .l-title {
    background: $gradient;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .m-list {
    display: inherit;
    flex-direction: row;
    width: 100%;
    .m-con {
      display: inherit;
      flex: 1 0 10%;
      align-items: center;
      .m-text {
        text-align: center;
        &:hover {
          color: $color-one;
        }
      }
    }
  }
}
</style>
