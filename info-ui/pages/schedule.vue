<template>
  <view class="page">
    <u-navbar
      placeholder
      :title="$t('schedule')"
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
        <view class="kongbai"></view>
        <view class="img-box">
          <image class="img" src="../static/img/construction.jpeg" />
        </view>
        <view class="text-box">
          {{msg}}
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      msg:"",//提示文字
    };
  },
  onShow() {
    this.getData()
  },
  methods: {
    getData(){
      this.$api.schedule().then(({ data }) => {
        if (data.code == 0) {
          this.msg = data.msg
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
  margin-top: 240rpx;
}
</style>
