<template>
  <div class="c-wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.c-wrapper {
  margin: 0 10px;
  width: 100%;
}
@media (min-width: 576px)  {
  .c-wrapper {
    margin: 0 20px;
  }
}
@media (min-width: 768px)  {
  .c-wrapper {
    margin: 0 auto;
    max-width: 1140px;
  }
}
@media (min-width: 992px)  {

}
@media (min-width: 1200px) {

}
</style>
