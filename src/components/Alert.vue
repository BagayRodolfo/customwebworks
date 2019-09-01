<template>
  <transition name="fade">
    <div v-if="isShow" class="a-con a-shadow" :style="css | toCss">
      <div class="a-top">
        <div @click="toggleShow" class="a-close">
          X
        </div>
      </div>
      <div class="a-bot">
        <h6>Stylic</h6>
        <p class="p-sm">Sit irure consequat aliquip labore esse officia enim exercitation magna excepteur occaecat reprehenderit. Proident deserunt esse irure laborum laboris do sunt adipisicing fugiat consectetur do. Sint officia culpa ut nostrud cupidatat tempor ut ipsum.</p>
      </div>
      <VButton
        class="a-button"
        type="border"
        :func="() => {console.log('test')}">
      Read More</VButton>
    </div>
  </transition>
</template>
<script>
import VButton from './Button.vue'
export default {
  data () {
    return {
      isShow: true
    }
  },
  methods: {
    toggleShow () {
      this.isShow = !this.isShow
    }
  },
  props: [
    'css'
  ],
  components: {
    VButton
  },
  filters: {
    toCss (v) {
      let r = ''
      for (let k in v) {
        r += `${k}: ${v[k]}; `
      }
      return r
    }
  }
}
</script>
<style scoped>
.a-con {
  width: 350px;
  padding: 15px;
  background: var(--gradient);
  display: flex;
  flex-direction: column;
  border-radius: 20px;
}
.a-shadow {
  box-shadow: 4px 4px 10px 2px rgba(0,0,0,0.3)
}
.a-bot {
  padding: 0px 10px;
}
.a-bot h6 {
  color: var(--theme-one-white);
  margin-bottom: 10px;
}
.a-bot p {
  color: var(--theme-one-white);
  margin-bottom: 10px;
}
.a-top {
  display: inherit;
  flex-direction: row;
  justify-content: flex-end;
}
.a-close {
  color: var(--theme-one-white);
}
.a-button {
  border: 2.5px var(--theme-one-white) solid!important;
  width: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.5s;
}
.fade-leave-active {
  opacity: 0;
  transform: translateX(200px);
}

</style>
