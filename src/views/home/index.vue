<template>
  <div class="container">
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'Home',
    computed: {
      ...mapGetters([
        'appName'
      ])
    }
  }
</script>

<style scoped lang="scss">
  .container {
    width: 600px;
    height: 600px;
    background: repeating-radial-gradient(rgba(255, 0, 0, 0.5), rgba(255, 0, 0, 0.5) 10px, rgba(0, 255, 0, 0.5) 10px, rgba(0, 255, 0, 0.5) 20px);
  }
</style>
