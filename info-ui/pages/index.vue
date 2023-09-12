<template>
  <view class="page">
    <view class="wrap">
      <view class="head">
        <view class="image">
            <image class="icon-img3" src="../static/img/user.png" />
          </view>
          <label>姓名</label>
      </view>
      <view class="title">
        <view class="title-item">
          <view class="btj-box btj-bg-green">
            <view class="btj-kong"></view>
            <view class="btj-img img-green">
              <image class="btj-icon" src="../static/img/btj.png" />
            </view>
            <view class="btj-text text-green">登记领补贴金</view>
          </view>
        </view>
        <view class="title-item">
          <view class="btj-box btj-bg-red">
            <view class="btj-kong"></view>
            <view class="btj-img img-red">
              <image class="btj-icon" src="../static/img/cross.png" />
            </view>
            <view class="btj-text text-red">sos</view>
          </view>
        </view>
      </view>
      <view class="content-body">
        <view class="content">
            <view
              class="item"
              v-for="(item, index) in list"
              :key="index"
              @click="change(item)"
            >
              <view class="img-box">
                <image class="img" :src="item.img" />
              </view>
              <text class="txt">{{ item.name }}</text>
            </view>
        </view>
        <view class="notice">
          <view class="notice-title">信息</view>
          <view class="notice-content">
            <view v-for="(item, index) in list"
            :key="index"
            class="notice-item"
            >
              <img class="notice-img" :src="item.img" />
            </view>
            <view></view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import img1 from "../static/img/passport.png";
import img2 from "../static/img/enrollment.png";
import img3 from "../static/img/reserve.png";
import img5 from "../static/img/information.png";
import img6 from "../static/img/opinion.png";
import img7 from "../static/img/schedule.png";
export default {
  data() {
    return {
      loading: false,
      list: [
        { name: this.$t("passport"), img: img1, path: "/pages/passport" },
        { name: this.$t("enrollment"), img: img2, path: "/pages/enrollment" },
        { name: this.$t("reserve"), img: img3,path: "/pages/reserve" },
        { name: this.$t("information"), img: img5, path: "/pages/information" },
        { name: this.$t("opinion"),img: img6,path: "/pages/opinion",},
        { name: this.$t("schedule"),img: img7,path: "/pages/schedule",},
      ],
    };
  },
  async onLoad() {
    await this.$onLaunched;
  },
  onShow() {
  },
  methods: {
    change({ name, path, url }) {
      uni.navigateTo({
        url: path,
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "../static/list.scss";
.list {
  .goods-img {
    display: block;
    margin: 0 auto;
  }
}
.page {
  background-color: #fafafa;
}
.content {
  overflow: hidden;
  width: 94%;
  margin: auto;
  .img {
    width: 70rpx;
    height: 70rpx;
    display: block;
    margin: auto;
    padding-top: 15rpx;
  }
  .item {
    padding-top: 40rpx;
    width: 33.33%;
    float: left;
  }
  .txt {
    padding-top: 10rpx;
    font-size: 24rpx;
    display: block;
    width: 100%;
    text-align: center;
  }
  .img-box{
    background-color: #fff;
    width: 100rpx;
    height: 100rpx;
    margin: auto;
    border-radius: 100rpx;
  }
}
.empty2 {
  padding-top: 40rpx;
  background-color: #fff;
}
.head {
    display: flex;
    padding: 28rpx 20rpx;
    background-color: #fff;
    font-size: 28rpx;
    align-items: center;
    color: #999;
    .image {
      margin-right: 20rpx;
    }
    .icon-img3 {
      width: 100rpx;
      height: 100rpx;
      border-radius: 100rpx;
    }
    label {
      flex: 1;
    }
    .right-text {
      text-align: right;
    }
  }
  .title{
    display: flex;
    .title-item{
      flex: 1;
    }
    .btj-box{
      &.btj-bg-green{
        background: linear-gradient(
          #1fceb8,
          #6bedac,
        );
      }
      &.btj-bg-red{
        background: linear-gradient(
          #f1716d,
          #fd908d,
        );
      }
      height: 350rpx;
      width: 240rpx;
      border-radius: 20rpx;
      margin: 40rpx auto;
      .btj-kong{
        width: 100%;
        height: 80rpx;
      }
      .btj-img{
        width: 100rpx;
        height: 100rpx;
        margin: 0 auto;
        border-radius: 100rpx;
        &.img-green{
          background: #66e4bf;
        }
        &.img-red{
          background: #fb9490;
        }
        .btj-icon{
          width: 80rpx;
          height: 80rpx;
          margin: 10rpx;
          background-color: #fff;
          border-radius: 80rpx;
        }
      }
      .btj-text{
        color: #eee;
        width: 200rpx;
        margin: 0 auto;
        font-size: 24rpx;
        height: 100rpx;
        text-align: center;
        border-radius: 10rpx;
        margin-top: 30rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        &.text-green{
          background: #48d9b2;
          border: 4px solid #31d4b7;
        }
        &.text-red{
          background: #ff7570;
          border: 4px solid #fe756e;
        }
      }
    }
  }
  .content-body{
    background-color: #ecf0f8;
    overflow: hidden;
    border-radius: 60rpx 60rpx 0px 0px;
    .notice{
      width: 94%;
      margin: auto;
      text-indent: 20rpx;
      font-size: 48rpx;
      margin-top: 20rpx;
      .notice-title{
        margin-bottom: 60rpx;
      }
      .notice-item{
        width: 50%;
        float: left;
        .notice-img{
          width: 90%;
          height: 300rpx;
          border-radius: 20rpx;
        }
      }
    }
  }
</style>
