<template>
  <div>
    <div class="t-anim c-con a-shadow" :class="processSettings()">
      <!-- @slot Any content -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
/**
 * @version 1.0.1
 */
export default {
  data () {
    return {
      size: ''
    }
  },
  props: {
    /**
     * Pre-set height of the card.<br>
     * Options: sm, md, lg
     */
    height: {
      type: String,
      default: 'auto'
    },
    /**
     * Pre-set width of the card.<br>
     * Options: xs, sm, md, lg, xl
     */
    width: {
      type: String,
      default: 'sm'
    },
    /**
     * Padding inside the card.<br>
     * Options: xs, sm, md, lg, xl<br>
     * Pattern: <horizontal-padding>-<vertical-padding>
     */
    pad: {
      type: String,
      default: 'sm-sm'
    }
  },
  methods: {
    /**
     * Success event.
     *
     * @type {object}
     */
    processSettings () {
      return [
        this.getWidth(this.width),
        this.getHeight(this.height),
        ...this.getPad(this.pad)
      ].join(' ')
    },
    getWidth (v) {
      return `w-${v}`
    },
    getHeight (v) {
      return `h-${v}`
    },
    getPad (v) {
      const m = v.split('-')
      return [`p-x-${m[0] || 'sm'}`, `p-y-${m[1] || 'sm'}`]
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

.c-con.p-x-sm {
  padding-left: 10px;
  padding-right: 10px;
}
.c-con.p-x-md {
  padding-left: 20px;
  padding-right: 20px;
}
.c-con.p-x-lg {
  padding-left: 30px;
  padding-right: 30px;
}

.c-con.p-y-sm {
  padding-top: 10px;
  padding-bottom: 10px;
}
.c-con.p-y-md {
  padding-top: 20px;
  padding-bottom: 20px;
}
.c-con.p-y-lg {
  padding-top: 30px;
  padding-bottom: 30px;
}

</style>
