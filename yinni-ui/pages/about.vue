<template>
  <view class="page">
    <u-navbar
      placeholder
      :title="$t('aboutTitle')"
      :border="false"
      autoBack
      fixed
      leftIconSize="0"
      safe-area-inset-top
      bgColor="#4b80af"
      height="52px"
      titleStyle="color:#fff;font-weight:500;font-size:32rpx;"
    >
    </u-navbar>
    <view class="wrap">
      <scroll-view scroll-y class="scroll">
        <image class="image" mode="widthFix" src="../static/img/banner_20.jpg" />
        <div class="text-content">
          <p>
            
            Founded in 1895, Hakuhodo is today a global top ten integrated 
            marketing and innovation company. Through our network linking over
            150 offices in 20 countries and regions, we work in partnership 
            with more than 3,000 clients. Some of our relationships have endured
            for over 70 years. Leveraging our world-class research and big data
            and digital expertise, we develop innovative creative solutions 
            for each client we partner with.
          </p>

          <p>
            “Agency Report 2022” ranks Hakuhodo the second largest 
            advertising agency in the world.
          </p>
        </div>
      </scroll-view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  onTabItemTap() {
    if (this.$store.countDown) {
      this.$store.countDown.forEach((e) => {
        e.reset();
      });
    }
  },
  onLoad() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.scroll {
  height: calc(100vh - 210rpx + var(--status-bar-height));
}
.image {
  width: 100vw;
}
.text {
  font-size: 50rpx;
}
.text-content {
  padding: 20rpx;
}
p {
  margin-bottom: 20rpx;
  font-size: 24rpx;
  color: #333;
}
</style>
