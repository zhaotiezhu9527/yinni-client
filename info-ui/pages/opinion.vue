<template>
  <view class="page">
    <u-navbar
      placeholder
      :title="$t('opinion')"
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
        <view class="kongbai">
          <view class="opinion-text">{{$t('yourOpinion')}}：</view>
          <view>
            <textarea class="opinion-textarea" v-model="value1"></textarea>
          </view>
        </view>
        <view class="img-box">
          <image class="img" src="../static/img/construction.jpeg" />
        </view>
        <view class="btn-box">
          {{$t('confirmText')}}
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      config: {}, //配置
      value1: '11111'
    };
  },
  onShow() {
    // this.systemFn()
  },
  methods: {
    systemFn(){
      this.$api.system_config().then(({ data }) => {
        if (data.code == 0) {
          this.config = data.data
        }
      });
    }
  },
};
</script>

<style scoped lang="scss">
.kongbai{
  height: 250rpx;
}
.img-box{
  width: 80%;
  margin: auto;
  .img{
    width: 100%;
  }
}
.text-box{
  width: 94%;
  margin: auto;
  font-size: 24rpx;
  text-align: center;
  margin-top: 20rpx;
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
}
.opinion-text{
  font-size: 24rpx;
  text-indent: 50rpx;
  margin-top: 60rpx;
  margin-bottom: 30rpx;
}
.opinion-textarea{
  width: 90%;
  margin: auto;
  border: 2px solid #eee;
  height: 100rpx;
}
</style>
