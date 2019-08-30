<template>
  <div class="c-con a-shadow" :class="procSize(width , height)">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      size: ''
    }
  },
  props: {
    height: {
      type: String,
      default: 'auto'
    },
    width: {
      type: String,
      default: 'sm'
    }
  },
  methods: {
    procSize (w, h) {
      return [this.filterWidth(w), this.filterHeight(h)].join(' ')
    },
    filterWidth (v) {
      if (v) {
        return `w-${v}`
      }
      return ''
    },
    filterHeight (v) {
      if (v) {
        return `h-${v}`
      }
      return ''
    }
  }
}
</script>

<style scoped>
.c-con {
  border-radius: 20px;
  position: relative;
}
.a-shadow {
  box-shadow: 4px 4px 10px 2px rgba(0,0,0,0.1);
}

.c-con.w-xs {
  width: 250px;
}
.c-con.w-sm {
  width: 350px;
}
.c-con.w-md {
  width: 480px;
}
.c-con.w-lg {
  width: 740px;
}
.c-con.w-xl {
  width: 1020px;
}

.c-con.h-sm {
  height: 350px;
}
.c-con.h-md {
  height: 480px;
}
.c-con.h-lg {
  height: 740px;
}
.c-con.h-auto {
  height: auto;
}
</style>
