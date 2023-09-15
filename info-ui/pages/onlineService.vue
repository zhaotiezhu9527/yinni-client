<template>
  <view class="page">
    <u-navbar
      placeholder
      :title="$t('service')"
      :border="false"
      autoBack
      fixed
      safe-area-inset-top
      class="linear"
      leftIconColor="#ffffff"
      leftIconSize="32"
      height="100rpx"
      titleStyle="color:#fff;font-weight:600;font-size:32rpx;"
    >
    </u-navbar>
    <view class="wrap">
      <!-- <view v-if="path">
        <iframe :src="path" class="online"> </iframe>
      </view> -->
      <view class="kefu-box">
        <image class="kefu-img" src="../static/img/kefu.jpg" />
      </view>
      <view class="title">CHĂM SÓC KHÁCH HÀNG </view>
      <view class="text">Thời gian làm việc : 8 giờ 30  đến 17 giờ </view>
      <view class="btn" @click="changeBtn">Liên hệ</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      path: "",
    };
  },
  onShow(){
    this.dataFn()
  },
  methods: {
    dataFn() {
      this.$api.system_config().then(({ data }) => {
        if (data.code == 0) {
          this.path = data.data.onlineService;
        }
      });
    },
    changeBtn(){
      this.$base.show("Hiện tại tất cả đường dây đều bận , bạn vui lòng chờ trong giây lát sẽ có nhân viên liên hệ hỗ trợ")
    }
  },
};
</script>

<style scoped lang="scss">
.online {
  width: 100%;
  height: calc(100vh - 100rpx + var(--status-bar-height));
  border: none;
}
.kefu-box{
  width: 100%;
  .kefu-img{
    width: 70%;
    // height: 480rpx;
    left: 15%;
    top: 20%;
  }
}
.title{
  width: 100%;
  text-align: center;
  color: #bc2733;
  font-size: 40rpx;
  font-weight: 600;
}
.text{
  width: 100%;
  text-align: center;
  color: #bc2733;
  font-size: 32rpx;
}
.btn{
  width: 80%;
  height: 100rpx;
  border-radius: 50rpx;
  background-color: #bc2733;
  color: #fff;
  line-height: 100rpx;
  text-align: center;
  margin: 40rpx auto;
}
</style>
