<template>
  <view class="page">
    <u-navbar
      placeholder
      :title="$t('requestType')"
      :border="false"
      autoBack
      fixed
      safe-area-inset-top
      bgColor="#4babf8"
      leftIconColor="#fff"
      leftIconSize="32"
      height="52px"
      titleStyle="color:#fff;font-weight:500;font-size:32rpx;"
    >
    </u-navbar>
    <view class="wrap">
      <view class="content">
        <view class="title">
          {{$t('support')}}
        </view>
        <view class="welf-title">
          <view class="wlef-img">
            <image class="wlef-image" src="../static/img/cross.png" />
          </view>
          <view class="wlef-text">
            <view class="wlef-text-black">
              {{$t('HealthBag')}}
              
            </view>
            <view class="wlef-text-grey">
              {{$t('Neccessary')}}
            </view>
          </view>
        </view>
        <view class="welf-title margin-top40">
          <view class="wlef-img">
            <image class="wlef-image" src="../static/img/money.png" />
          </view>
          <view class="wlef-text">
            <view class="wlef-text-black">
              {{$t('Cash')}}
              
            </view>
            <view class="wlef-text-black">
              {{$t('welfarePackageBack')}}
            </view>
          </view>
        </view>
        <view class="welf-title margin-top10">
          <view class="wlef-img">
            <image class="wlef-image" src="../static/img/money.png" />
          </view>
          <view class="wlef-text">
            <view class="wlef-text-black">
              {{$t('firstWelfare')}}1
              
            </view>
          </view>
        </view>
        <view class="welf-title margin-top10">
          <view class="wlef-img">
            <image class="wlef-image" src="../static/img/money.png" />
          </view>
          <view class="wlef-text">
            <view class="wlef-text-black">
              {{$t('firstWelfare')}}2
              
            </view>
          </view>
        </view>
        <view class="welf-title margin-top10">
          <view class="wlef-img">
            <image class="wlef-image" src="../static/img/money.png" />
          </view>
          <view class="wlef-text">
            <view class="wlef-text-black">
              {{$t('firstWelfare')}}3
              
            </view>
          </view>
        </view>
        <view class="btn-box" @click="opinionApply">
          {{$t('SubmitSupport')}}
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  onShow() {
    // this.systemFn()
  },
  methods: {
    opinionApply(){
      this.$api.opinion_apply().then(({ data }) => {
        if (data.code == 0) {
          this.$base.show(data.msg);
        }
      });
    }
  },
};
</script>

<style scoped lang="scss">
.content{
  width: 90%;
  margin: auto;
  .title{
    color: #43708c;
    font-size: 32rpx;
    font-weight: 600;
    line-height: 80rpx;
  }
  .welf-title{
    display: flex;
    justify-content: center;
    align-items: center;
    .wlef-img{
      width: 80rpx;
      height: 80rpx;
      .wlef-image{
        width: 80rpx;
        height: 80rpx;
      }
    }
    .wlef-text{
      flex: 1;
      margin-left: 40rpx;
      .wlef-text-black{
        color: #333;
        font-size: 28rpx;
      }
      .wlef-text-grey{
        color: #999;
        font-size: 24rpx;
      }
    }
  }
}
.btn-box{
  width: 70%;
  height: 74rpx;
  margin: auto;
  background:linear-gradient(to right,#2789fb,#4daef3) ;
  border-radius: 74rpx;
  text-align: center;
  line-height: 74rpx;
  color: #fff;
  font-size: 28rpx;
  margin-top: 40rpx;
}
</style>
