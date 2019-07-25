<template>
  <div>
    <div class="topbanner">
      <div class="please-info">临时停靠，请多关照</div>
      <div class="car-info">京Q 0Q7M5</div>
      <div class="call-action">
        <i class="icon-call"></i>
        <p>拨打电话</p>
        <p>通知车主</p>
      </div>
      <div class="wave-container">
        <div class="wave"></div>
      </div>
    </div>
    <div class="options">
      <a class="opt-text" href="javascript:;" @click="gotoBuy">我也要申请挪车码></a>
    </div>
    <desc-area class="desc-area"></desc-area>
  </div>
</template>

<script>
  import descArea from '@/components/DescArea'

  export default {
    name: 'Move',
    components: {
      descArea
    },
    methods: {
      gotoBuy() {
        this.$router.push({ name: 'Buy' })
      }
    }
  }
</script>

<style scoped lang="scss">
  .topbanner {
    height: 6.53rem;
    background: url("../../assets/img/bannerBg_1.png") no-repeat;
    background-position: left bottom;
    background-size: 100% 100%;
    position: relative;

    .please-info {
      box-sizing: border-box;
      font-size: .6rem;
      color: #fff;
      padding: .6rem 0 .3rem 0;
      text-align: center;
    }

    .car-info {
      color: #000;
      text-align: center;
      font-size: .56rem;
    }

    .call-action {
      box-sizing: border-box;
      margin: .33rem auto;
      width: 2.25rem;
      height: 2.25rem;
      color: #8b9a82;
      border-radius: 50%;
      border: .2rem solid #92d56d;
      background-color: white;
      animation: size_wave 5s linear infinite;

      @keyframes size_wave {
        0% {
          border-color: #92d56d;
          color: #92d56d;
        }
        50% {
          border-color: #75c259;
          color: #75c259;
        }
        100% {
          border-color: #92d56d;
          color: #92d56d;
        }
      }

      .icon-call {
        display: block;
        width: .65rem;
        height: .65rem;
        margin: .2rem auto .05rem auto;
        background: url("../../assets/img/icon-call.svg") no-repeat;
        background-size: 100% 100%;
      }

      p {
        font-size: .27rem;
        text-align: center;
      }
    }

    .wave-container {
      position: absolute;
      bottom: 0;
      width: 7.5rem;
      overflow: hidden;
      .wave {
        width: 20rem;
        height: 1rem;
        background: url("../../assets/img/wave1.png") no-repeat;
        background-size: 100% 100%;
        animation: move_wave 3s linear infinite;
      }

      @keyframes move_wave {
        0% {
          transform: translateX(0)
        }
        100% {
          transform: translateX(-45%)
        }
      }
    }
  }

  .options {
    text-align: center;
    margin: .35rem 0;

    .opt-text {
      color: #81c457;
      font-size: .36rem;
      line-height: .6rem;
    }
  }
</style>
