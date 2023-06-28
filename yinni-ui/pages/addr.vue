<template>
  <view class="page">
    <u-navbar
      placeholder
      :title="$t('address')"
      :border="false"
      autoBack
      fixed
      safe-area-inset-top
      bgColor="#4b80af"
      leftIconColor="#fff"
      leftIconSize="32"
      height="52px"
      titleStyle="color:#fff;font-weight:500;font-size:32rpx;"
    >
    </u-navbar>
    <view class="wrap">
      <view class="from-input">
        <label>{{ $t("phoneNo") }}</label>
        <input
          type="text"
          :disabled="!bindStatus"
          v-model="userPhone"
          class="input-text"
          :placeholder="$t('inputPhoneNo')"
        />
      </view>
      <view class="from-input">
        <label>{{ $t("address") }}</label>
        <input
          type="text"
          :disabled="!bindStatus"
          v-model="address"
          class="input-text"
          :placeholder="$t('inputAddress')"
        />
      </view>
      <u-button
        v-if="bindStatus"
        class="btn-class"
        block
        @click="changeBind"
        :loading="loading"
      >
        {{ $t("idCard") }}
      </u-button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      userPhone: "", //手机号码
      address: "", //收货地址
      bindStatus: false, //是否实名
    };
  },
  onShow() {
    this.getInfo();
  },
  methods: {
    //用户列表数据
    getInfo() {
      this.$api.user_info().then((res) => {
        if (res.data.code == 0) {
          if (!res.data.data.userPhone || res.data.data.userPhone === null) {
            this.bindStatus = true;
          } else {
            this.bindStatus = false;
          }
          this.userPhone = res.data.data.userPhone;
          this.address = res.data.data.address;
        }
      });
    },
    // 实名认证
    changeBind() {
      if (!this.address) {
        return this.$base.show(this.$t("inputAddress"));
      } else if (!this.userPhone) {
        return this.$base.show(this.$t("inputPhoneNo"));
      }
      this.loading = true;
      this.$api
        .user_address({
          userPhone: this.userPhone,
          address: this.address,
        })
        .then((res) => {
          if (res.data.code == 0) {
            this.getInfo();
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style scoped lang="scss">
.wrap {
  .from-input {
    margin: 40rpx;
    display: flex;
    height: 90rpx;
    label {
      width: 200rpx;
      margin-right: 20rpx;
    }
    .input-text {
      flex: 1;
      text-align: right;
    }
  }
}
</style>
