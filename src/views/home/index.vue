<template>
  <div class="container">
    <div class="top">
      <div class="left-card">
        <img src="../../assets/img/guoyao_logo_blue_home@2x.png" alt="">
        <div class="title">
          请刷卡登录
        </div>
        <img src="../../assets/img/yaonuo_card_icon@2x.png" alt="">
        <div class="text-area">
          <div class="hos-title">
            首都医科大学附属医院
          </div>
          <div class="desc-area">
            <span>回收柜名称： 某某名称（123456）</span>
            回收柜类型：某某类
            归属科室：某某科室、某某科室
          </div>
        </div>
      </div>
      <div class="right-card">
        <div class="right-card-top">
          <div class="text-item">
            大码：<span class="ok">剩余50件</span>
          </div>
          <div class="text-item">
            中码：<span class="ok">剩余50件</span>
          </div>
          <div class="text-item">
            小码：<span class="ok">剩余50件</span>
          </div>
        </div>
        <div class="right-card-center">
          <a class="btn" href="javascript:;">可领取衣物</a>
        </div>
        <div class="right-card-bottom">
          <i class="icon-wifi" />
          3月22日 10:38
        </div>
      </div>
    </div>
    <div class="bottom-info">
      <p>联系电话：18521033333</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

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
    padding: 1.10rem 0rem .72rem 1.01rem;
    height: 100vh;
    box-sizing: border-box;

    .top::after {
      content: '';
      display: block;
      clear: both;
      overflow: hidden;
    }

    .left-card {
      float: left;
      width: 5.80rem;
      height: 5.80rem;
      box-sizing: border-box;
      text-align: center;
      padding: .23rem .40rem 0 .40rem;
      background: url("../../assets/img/left-card-bg.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;

      .title {
        margin: .51rem 0 .34rem 0;
        font-size: .48rem;
        font-family: SourceHanSansCN-Medium;
        font-weight: 500;
        color: rgba(38, 74, 148, 1);
      }

      .text-area {
        margin-top: .57rem;
        padding: .2rem 0 .27rem 0;
        text-align: left;
        border-top: 0.01rem dashed rgba(38, 74, 148, 1);

        .hos-title {
          font-size: .28rem;
          font-weight: 400;
          color: rgba(111, 111, 111, 1);
        }

        .desc-area {
          font-size: .20rem;
          font-weight: 300;
          color: rgba(111, 111, 111, 1);
          line-height: .41rem;
        }
      }
    }

    .right-card {
      float: left;
      width: 3.87rem;
      height: 5.8rem;
      box-sizing: border-box;
      margin-left: 1rem;
      padding-top: 0.41rem;

      .right-card-top {
        box-sizing: border-box;
        padding: .83rem .59rem .52rem 1.03rem;
        width: 3.87rem;
        height: 3.31rem;
        background: url("../../assets/img/right-card-top.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;

        .text-item {
          font-size: .34rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);

          &:not(:first-child) {
            margin-top: .32rem;
          }

          span.ok {
            font-size: .22rem;
            font-weight: 400;
            color: rgba(91, 182, 71, 1);
            border-bottom: .03rem solid rgba(91, 182, 71, 1);
            padding-bottom: .1rem;
            vertical-align: top;
          }
        }
      }

      .right-card-center {
        text-align: center;
        margin-top: .64rem;

        a.btn {
          display: inline-block;
          color: rgba(17, 213, 198, 1);
          width: 2.71rem;
          height: .71rem;
          line-height: .71rem;
          border: .03rem solid rgba(17, 213, 198, 1);
          border-radius: .35rem;
          font-size: .40rem;
          font-weight: 400;
          color: rgba(17, 213, 198, 1);
          opacity: 0.8;
        }
      }

      .right-card-bottom {
        margin-top: .25rem;
        text-align: center;
        font-size: 28px;
        font-weight: 300;
        color: rgba(137, 214, 207, 1);
        opacity: 0.8;

        .icon-wifi {
          display: inline-block;
          width: .30rem;
          height: .21rem;
          background-image: url('../../assets/img/yaonuo_wifi_green_icon@2x.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }
      }
    }

    .bottom-info {
      font-size: .20rem;
      margin-top: .19rem;
      padding-left: .41rem;
      font-weight: 300;
      color: rgba(215, 215, 215, 1);
      line-height: 30px;
      opacity: 0.8;
    }
  }
</style>
