<template>
  <div class="container">
    <header />
    <section class="main-container">
      <div class="bit1" />
      <div class="bit2" />
      <div class="bit3" />
      <div class="bit4" />
      <div class="bit5" />
      <div class="bit6" />
      <div class="main-banner">
        <img src="../../assets/images/main_banner.png" alt="main_banner">
      </div>
      <div class="video-cantainer" />
      <div class="title">
        <img src="../../assets/images/title1.png" alt="title1">
      </div>
      <section class="text-content">
        <p>为庆祝新中国成立70周年，来@秒拍 拍摄上传以 #我家的故事# 为创作主题的短视频或Vlog作品，讲述个人、家庭与新中国的故事，让我们一起用行动向祖国表白。</p>
        <p>ps（子话题三选一）：#我和祖国打个啵儿# #国货新光彩# #我为祖国再添砖# 可根据视频内容选择相应的子话题增加曝光。</p>
      </section>
      <div class="sub-btn">
        立即报名
      </div>
      <div class="title">
        <img src="../../assets/images/title2.png" alt="title2">
      </div>
      <section class="text-detail">
        <div class="title">
          <span class="line"></span>
          <span class="time">5月</span>
          <span class="text">开始征集</span>
        </div>
        <div class="desc">
          5月13日至9月13日活动期间，以庆祝新中国成立70周年为主线，2019年内根据活动主题拍摄的正能量短视频作品，网民作品时长在5分钟内、机构创作的作品时长在10分钟内。
        </div>
        <div class="vlog">
          <p><span class="red">#我和祖国打个啵儿#</span>：“亲吻”具有象征祖国形象的物品；</p>
          <p><span class="red">#国货老字号的新光彩#</span>：记录国货在新时代的新光彩；</p>
          <p><span class="red">#我为祖国再添砖#</span>：Vlog玩法记录劳动者的和逐梦青春。</p>
        </div>
      </section>
      <section class="text-detail">
        <div class="title">
          <span class="dot"></span>
          <span class="time"><span class="small">9-10</span>月</span>
          <span class="text">公布获奖名单</span>
        </div>
        <div class="vlog">
          <p>主办方奖励</p>
          <p>设置<span class="red">「网民优秀作品」</span>及<span class="red">「机构优秀作品」</span></p>
          <p>两个奖项，每个奖项各选取70个优秀作品</p>
          <p><span class="red">一等奖</span>  各 3 名   奖励 20000 元创作稿费</p>
          <p><span class="red">二等奖</span>  各 5 名   奖励 10000 元创作稿费</p>
          <p><span class="red">三等奖</span>  各 10 名  奖励 5000 元创作稿费</p>
          <p><span class="red">网民优秀作品奖</span>  各 52 位  奖励 1000元创作稿费</p>
          <p class="small red">*以上奖励均为税前金额</p>
        </div>
      </section>
      <section class="text-detail">
        <div class="title">
          <span class="dot"></span>
          <span class="time">10月</span>
          <span class="text">获奖作品展示</span>
        </div>
      </section>
      <section class="text-detail">
        <div class="title">
          <span class="dot"></span>
          <span class="time">11月</span>
          <span class="text">线下评选颁奖</span>
        </div>
      </section>
    </section>
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
  // @代表src目录，这里只是演示了样式的引用方式，实际使用的时候可以直接在这里写
  .container {
    width: 3.75rem;
    height: 32rem;
    background-image: url('../../assets/images/bg.png');

    .red {
      color: #ba0f0e !important;
    }

    .small {
      font-size: 0.12rem !important;
    }

    header {
      width: 3.75rem;
      height: 0.64rem;
      background-image: url('../../assets/images/header.png');
      -webkit-background-size: 100% 100%;
      background-size: 100% 100%;
    }

    .main-container {
      position: relative;

      .bit1, .bit2, .bit3, .bit4, .bit5, .bit6 {
        position: absolute;
        background-size: 100% 100%;
      }

      .bit1 {
        top: 0;
        left: 0;
        width: 0.73rem;
        height: 0.73rem;
        background-image: url('../../assets/images/bit1.png');
      }

      .bit2 {
        top: 0.1rem;
        right: 0.1rem;
        width: 0.64rem;
        height: 0.31rem;
        background-image: url('../../assets/images/bit2.png');
      }

      .bit3 {
        top: 2.82rem;
        right: 0rem;
        width: 0.39rem;
        height: 0.54rem;
        background-image: url('../../assets/images/bit3.png');
      }

      .bit4 {
        top: 3.42rem;
        right: 0.39rem;
        width: 0.39rem;
        height: 0.38rem;
        background-image: url('../../assets/images/bit4.png');
      }

      .bit5 {
        top: 3.2rem;
        left: 0rem;
        width: 0.56rem;
        height: 1.32rem;
        background-image: url('../../assets/images/bit5.png');
      }

      .bit6 {
        top: 6.11rem;
        right: 0.18rem;
        width: 0.54rem;
        height: 0.46rem;
        background-image: url('../../assets/images/bit6.png');
      }

      .main-banner {
        padding-top: 0.49rem;
        height: 3.41rem;
        text-align: center;
      }

      .video-cantainer {
        margin: 0.08rem 0.32rem 0.33rem 0.33rem;
        width: 3.1rem;
        height: 1.79rem;
        background-image: url('../../assets/images/bg1.png');
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
      }

      .title {
        text-align: center;
      }

      .text-content {
        margin: 0.08rem 0.2rem 0.2rem 0.2rem;
        text-indent: 2em;
        width: 3.35rem;
        height: 1.54rem;

        p {
          margin: 0;
          font-family: PingFangSC-Regular;
          font-size: 0.14rem;
          font-weight: normal;
          font-stretch: normal;
          line-height: 0.22rem;
          letter-spacing: 0rem;
          color: #2b2b2b;
        }
      }

      .sub-btn {
        margin: 0 auto 0.31rem auto;
        text-align: center;
        width: 2.7rem;
        height: 0.49rem;
        line-height: 0.49rem;
        background-color: #c7110f;
        box-shadow: 0rem 0rem 0.04rem 0rem rgba(154, 141, 123, 0.65);
        border-radius: 0.04rem;
        font-size: 0.19rem;
        color: #ffffff;
      }

      .text-detail {
        margin: 0.16rem 0.15rem 0rem 0.2rem;

        .title {
          height: 0.25rem;
          text-align: left;
          vertical-align: center;

          .line {
            display: inline-block;
            margin: 0.02rem 0.08rem 0.02rem 0rem;
            width: 0.05rem;
            height: 0.1rem;
            line-height: 0.21rem;
            background-color: #ba0f0e;
            border-radius: 0.1rem;
          }

          .dot {
            display: inline-block;
            margin: 0rem 0.08rem 0.03rem 0rem;
            width: 0.05rem;
            height: 0.05rem;
            background-color: #ba0f0e;
            border-radius: 0.1rem;
          }

          .time {
            display: inline-block;
            width: 0.5rem;
            height: 0.24rem;
            font-size: 0.17rem;
            font-weight: 500;
            color: #232323;
          }

          .text {
            display: inline-block;
            height: 0.25rem;
            font-size: 0.18rem;
            font-weight: 500;
            color: #232323;
          }
        }

        .desc {
          width: 2.75rem;
          height: 0.72rem;
          font-size: 0.12rem;
          line-height: 0.18rem;
          margin: 0.06rem 0rem 0.08rem 0.65rem;
          color: #606060;
        }

        .vlog {
          width: 2.75rem;
          margin: 0.06rem 0rem 0.08rem 0.65rem;
          p {
            padding: 0;
            margin: 0;
            font-size: 0.14rem;
            line-height: 0.22rem;
            color: #2b2b2b;
          }
        }
      }
    }
  }
</style>
