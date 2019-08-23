<template>
  <button :class="cls" @click="func"><slot></slot></button>
</template>

<script>
export default {
  props: [
    'func',
    'type',
    'gradient'
  ],
  computed: {
    cls () {
      let cl = ''
      if (this.gradient) {
        cl += 'gradient'
      } else {
        cl += 'clear'
      }
      cl += ` ${this.type}`
      return cl
    }
  }
}
</script>

<style scoped>

button {
  border-radius: 50px;
  border: 0px black solid;
  width: 200px;
  color: #fff;
  font-weight: bolder;
  animation-name: out;
  animation-duration:1s;
  animation-fill-mode: forwards;
}
button:hover {
  animation-name: in;
}
.solid.gradient {
  background: var(--gradient);
}
.solid.clear {
  background-color: var(--theme-one-main);
}
.border.gradient {
  border: 2.5px var(--gradient) solid;
}
.border.clear {
  border: 2.5px var(--theme-one-main) solid;
}
</style>
