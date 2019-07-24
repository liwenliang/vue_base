<template>
  <div>
    <div class="banner-top"></div>
    <div class="count-setting">
      <div class="setting-area">
        <div class="tip">您将收到</div>
        <div class="count">
          <span>挪车码（套）</span>
          <div class="action">
            <a class="action-btn" href="javascript:;" @click="minuitCount">-</a>
            <span class="action-text">{{currentCount}}</span>
            <a class="action-btn" href="javascript:;" @click="plusCount">+</a>
          </div>
        </div>
      </div>
    </div>
    <div class="desc-text">
      <p>*申请1套需要支付9.9元，包含邮寄费和信息服务费</p>
      <p>*您可以申请多套，给家人和朋友使用</p>
    </div>
    <div class="address-input">
      <input type="text" placeholder="请输入收货地址">
    </div>
    <div class="action-area">
      <a href="javascript:;">立即申请 {{computedMount}} 元</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Buy',
    data() {
      return {
        currentCount: 1
      }
    },
    computed: {
      computedMount() {
        return (this.currentCount * 9.9).toFixed(2)
      }
    },
    methods: {
      minuitCount() {
        this.currentCount--
        if (this.currentCount < 1) {
          this.currentCount = 1
        }
      },

      plusCount() {
        this.currentCount++
      }
    }
  }
</script>

<style scoped lang="scss">
  .banner-top {
    height: 4.4rem;
    background-color: #89d559;
  }

  .count-setting {
    height: 1.88rem;
    background: transparent;
    margin-top: -.63rem;
    padding: 0 .4rem;

    .setting-area {
      box-sizing: border-box;
      height: 1.88rem;
      background: white;
      border-radius: .1rem;
      padding: 0 .4rem;
      box-shadow: 0.03rem 0.03rem 0.06rem #7a7a7a;

      .tip {
        height: .84rem;
        line-height: .84rem;
        font-size: .3rem;
        color: #92b27d;
        border-bottom: .02rem solid #dfdfdf;
      }

      .count {
        height: .9rem;
        line-height: .9rem;
        font-size: .3rem;
        color: #000;

        .action {
          float: right;

          a.action-btn {
            display: inline-block;
            color: #a1a1a1;
            width: .5rem;
            height: .5rem;
            line-height: .5rem;
            text-align: center;
          }

          span.action-text {
            display: inline-block;
            width: .5rem;
            height: .5rem;
            line-height: .5rem;
            text-align: center;
            font-size: .28rem;
            color: #afcca8;
          }
        }
      }
    }
  }

  .desc-text {
    margin-top: .45rem;
    padding: .14rem .4rem;

    p {
      font-size: .27rem;
      color: #c7cec8;
    }
  }

  .address-input {
    margin: .1rem .4rem;
    height: .97rem;
    background: white;
    border-radius: .1rem;
    box-shadow: 0.03rem 0.03rem 0.04rem #b2b2b2;
    text-align: center;

    input {
      height: .77rem;
      width: 96%;
      font-size: .4rem;
      line-height: .97rem;
      padding: .1rem .1rem;
    }

    input::placeholder {
      color: #a6a6a6;
    }
  }

  .action-area {
    margin: .2rem .4rem;
    height: .92rem;
    background: #6ebe3b;
    border-radius: .1rem;
    text-align: center;

    a {
      color: white;
      font-size: .39rem;
      line-height: .92rem;
    }
  }
</style>
