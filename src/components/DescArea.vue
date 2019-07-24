<template>
  <div class="desc">
    <div class="desc-item">
      <i class="icon sheld red"></i>
      <span class="red">隐私保护</span>
      <span>电话信息不暴露</span>
    </div>
    <div class="desc-item">
      <i class="icon speed blue"></i>
      <span class="blue">快速便捷</span>
      <span>微信扫码一键电话挪车</span>
    </div>
    <div class="desc-item">
      <i class="icon call green"></i>
      <span class="green">多管齐下</span>
      <span>电话短信推送多渠道触达</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DescArea'
  }
</script>

<style scoped lang="scss">
  .red {
    color: #f98180;
  }

  .blue {
    color: #a6c4f6;
  }

  .green {
    color: #88d458;
  }

  .icon {
    display: inline-block;
    width: .42rem;
    height: .54rem;
    vertical-align: top;
  }

  .sheld {
    background: url("../assets/img/sheld.svg") no-repeat;
    background-size: 100% 100%;
  }

  .speed {
    background: url("../assets/img/speed.svg") no-repeat;
    background-size: 100% 100%;
  }

  .call {
    background: url("../assets/img/call.svg") no-repeat;
    background-size: 100% 100%;
  }

  .desc {
    box-sizing: border-box;
    height: 3.36rem;
    width: 7.3rem;
    margin: .2rem .1rem;
    padding: .2rem;
    border-radius: .1rem;
    background: #d3e9d2;

    .desc-item {
      box-sizing: border-box;
      height: .9rem;
      border-radius: .1rem;
      background: white;
      font-size: .36rem;
      line-height: .56rem;
      padding: .2rem;

      &:not(:first-child) {
        margin-top: .15rem;
      }
    }
  }
</style>
