<template>
  <div class="t-con">
    <div class="t-list">
      <button v-for="(item, index) in list" :key="index" @click="toggleSlot(item.slot)" class="t-title"
        :class="VSelection === item.slot ? 'active-title' : ''"
      ><p class="p-lg">{{item.title}}</p></button>
    </div>
    <div class="t-contents">
      <div v-for="(item, index) in list" :key="index" :class="VSelection === item.slot ? 'active-slot' : ''" class="t-slot">
        <slot :name="item.slot">{{item.slot}}</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      VSelection: this.selection
    }
  },
  props: {
    list: {
      type: Array,
      default: () => {
        return [{
          slot: 'tabone',
          title: 'Tab One'
        }, {
          slot: 'tabtwo',
          title: 'Tab Two'
        }]
      }
    },
    selection: {
      type: String,
      default: ''
    }
  },
  methods: {
    toggleSlot (v) {
      this.VSelection = v
    }
  }
}
</script>

<style>
.t-con {
  min-height: 100vh;
}
.t-list {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.t-contents {
  position: relative;
}
.t-slot {
  transition: opacity 0.5s;
  opacity: 0;
  position: absolute;
}
.active-slot {
  transition-delay: 0.45s;
  opacity: 1;
}
.t-title {
  transition-property: border, color;
  transition-duration: 0.5s;
  font-weight: bold;
  border: none;
  border-bottom: 4px var(--theme-one-light) solid;
}
.active-title {
  border-bottom: 4px var(--theme-one-main) solid;
  color: var(--theme-one-main);
}

</style>
