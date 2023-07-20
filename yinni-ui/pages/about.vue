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
        <div v-html="content" class="content-list"></div>
      </scroll-view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      content: "",//后台文本值
    };
  },
  onTabItemTap() {
    if (this.$store.countDown) {
      this.$store.countDown.forEach((e) => {
        e.reset();
      });
    }
  },
  onLoad() {},
  onShow() {
     this.getData()
  },
  methods: {
    //获取公司简介
    getData() {
      this.$api.system_text({
        code: "ptjj"
      }).then((res) => {
        if (res.data.code == 0) {
          let richtext = res.data.data
          let regex = new RegExp('<img','gi')
          richtext = richtext.replace(regex,`<img style="max-width: 100%"`)
          this.content = richtext
        }
      });
    }
  },
};
</script>

<style scoped lang="scss">
.scroll {
  height: calc(100vh - 210rpx + var(--status-bar-height));
}
.content-list{
  padding: 0 20rpx;
}
.image {
  width: 100vw;
}
</style>
