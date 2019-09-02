<template>
  <button :class="cls" @click="func"><slot></slot></button>
</template>

<script>
/**
 * @version 1.0.1
 */
export default {
  props: {
    /**
     * Action when component is clicked.
     */
    func: {
      type: Function,
      required: true,
      default: () => {}
    },
    /**
     * Enable gradient design.<br>
     * Options: gradient, clear
     */
    gradient: {
      type: String,
      default: 'gradient'
    },
    /**
     * Style of the button.<br>
     * Options: solid, border
     */
    'typ': {
      type: String,
      default: 'solid'
    }
  },
  computed: {
    cls () {
      let cl = ''
      if (this.gradient === 'gradient') {
        cl += 'gradient'
      } else {
        cl += 'clear'
      }
      cl += ` ${this.typ}`
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
  transition: transform 1s;
}
button:hover {
  transform: scale(1.05, 1.05);
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
