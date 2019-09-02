<template>
  <div class="dialog">
    <div>
      <button class="do something">do something!</button>
    </div>
    <p >- Omae wa Mou Shindeiru.</p>
    <p class="response-text" v-show="show">-</p>
  </div>
</template>
<script>
export default {
  data() {
    show: false
  },
};
</script>