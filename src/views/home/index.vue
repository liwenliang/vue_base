<template>
  <div class="container">
    <div class="banner"></div>
    <desc-area></desc-area>
    <div class="action">
      <a href="javascript:;" class="btn" @click="gotoBuy">申请我的挪车码</a>
    </div>
  </div>
</template>

<script>
import descArea from '@/components/DescArea'

export default {
  name: 'Home',
  components: {
    descArea
  },
  methods: {
    gotoBuy() {
      this.$router.push({name: 'Buy'})
    }
  }
}
</script>

<style scoped lang="scss">
  .banner {
    height: 3.62rem;
    background: #88d458;
  }

  .action {
    margin-top: .5rem;
    .btn {
      display: block;
      width: 6.76rem;
      height: .96rem;
      background: #6dbd3a;
      margin: 0 auto;
      border-radius: .1rem;
      text-align: center;
      color: #fff;
      font-size: .36rem;
      line-height: .96rem;
    }
  }
</style>
