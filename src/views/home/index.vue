<template>
  <div class="fensug">
    <div class="waven">
      <p>100%</p>
      <div class="wave"></div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Home',
    computed: {}
  }
</script>

<style scoped lang="scss">
  $size: 204px;
  .fensug {
    width: $size;
    height: $size;
    background: #fff;
    border: 4px #11D5C6 solid;
    margin: 100px auto;
    padding: 5px;
    border-radius: 50%;

    .waven {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: #11D5C6;
      overflow: hidden;
      position: relative;

      .wave {
        width: 408px;
        height: 50%;
        position: absolute;
        left: 0px;
        bottom: 0;
        background: url(../../assets/img/wave.png) repeat-x;
        animation: move_wave 1.8s linear infinite;
      }

      p {
        width: 100%;
        color: white;
        line-height: $size;
        font-weight: bold;
        font-size: 34px;
        text-align: center;
        z-index: 1;
        position: absolute;
      }
    }
  }

  @keyframes move_wave {
    0% {
      transform: translateX(0)
    }
    50% {
      transform: translateX(-25%)
    }
    100% {
      transform: translateX(-50%)
    }
  }
</style>
