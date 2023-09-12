<template>
  <view class="page">
    <u-navbar
      placeholder
      :title="$t('information')"
      :border="false"
      autoBack
      fixed
      safe-area-inset-top
      bgColor="#0382c7"
      leftIconColor="#fff"
      leftIconSize="32"
      height="52px"
      titleStyle="color:#fff;font-weight:500;font-size:32rpx;"
    >
    </u-navbar>
    <view class="wrap">
      <view class="logo">
        <image
          class="img"
          mode="widthFix"
          src="../static/img/user.png"
        />
      </view>
      <view class="form">
        <view class="form-item">
          <view class="form-title">姓名  <text class="red-text">*</text></view>
          <u-input
              type="text"
              :placeholder="$t('registerAccount')"
              clearable
              border="surround"
              v-model="userPhone"
            >
            </u-input>
        </view>
        <view class="form-item">
          <view class="form-title">出生日期  <text class="red-text">*</text></view>
          <u-input
              type="text"
              :placeholder="$t('registerAccount')"
              clearable
              border="surround"
              v-model="inputTime"
              suffixIcon="calendar"
	            suffixIconStyle="color: #909399"
              @focus="pickerShow = true"
            >
            </u-input>
        </view>
        <view class="form-item">
          <view class="form-title">性别  <text class="red-text">*</text></view>
          <u-radio-group 
              v-model="genderValue"
              placement="row"
              size="40"
              class="gender-box">
            <u-radio class="gender-item" v-for="(item,index) in genderList" :key="index" :label="item.name" :name="item.value">
            </u-radio>
          </u-radio-group>
        </view>
        <view class="form-item">
          <view class="form-title">手机号码  <text class="red-text">*</text></view>
          <u-input
              type="text"
              :placeholder="$t('registerAccount')"
              clearable
              border="surround"
              v-model="userPhone"
            >
            </u-input>
        </view>
        <view class="form-item">
          <view class="form-title">身份证号码  <text class="red-text">*</text></view>
          <u-input
              type="text"
              :placeholder="$t('registerAccount')"
              clearable
              border="surround"
              v-model="userPhone"
            >
            </u-input>
        </view>
        <view class="form-item">
          <view class="form-title">邮箱  <text class="red-text">*</text></view>
          <u-input
              type="text"
              :placeholder="$t('registerAccount')"
              clearable
              border="surround"
              v-model="userPhone"
            >
            </u-input>
        </view>
        <view class="form-item">
          <view class="form-title">城市  <text class="red-text">*</text></view>
          <u-input
              type="text"
              :placeholder="$t('registerAccount')"
              clearable
              border="surround"
              v-model="userPhone"
            >
            </u-input>
        </view>
        <view class="form-item">
          <view class="form-title">城市1  <text class="red-text">*</text></view>
          <u-input
              type="text"
              :placeholder="$t('registerAccount')"
              clearable
              border="surround"
              v-model="userPhone"
            >
            </u-input>
        </view>
        <view class="form-item">
          <view class="form-title">城市2  <text class="red-text">*</text></view>
          <u-input
              type="text"
              :placeholder="$t('registerAccount')"
              clearable
              border="surround"
              v-model="userPhone"
            >
            </u-input>
        </view>
        <view class="form-item">
          <view class="form-title">门牌号  <text class="red-text">*</text></view>
          <u-input
              type="text"
              :placeholder="$t('registerAccount')"
              clearable
              border="surround"
              v-model="userPhone"
            >
            </u-input>
        </view>
      </view>
      <view class="btns">
        <u-button
          class="btn-class"
          color="#2196f3"
          block
          @click="login"
          :loading="loading"
        >
          提交
        </u-button>
      </view>
    </view>
    <u-datetime-picker
            :show="pickerShow"
            v-model="dateTime"
            mode="date"
            @cancel="pickerShow = false"
            @confirm="pikerChange"
            cancelText="Hủy bỏ"
            confirmText="xác nhận"
    ></u-datetime-picker>
  </view>
</template>

<script>
import { changetime } from "../plugins/util";
export default {
  data() {
    return {
      password: "",
      userPhone: "",
      icon: "",
      show: false,
      columns: [],
      loading: false,
      confirmLoginPwd: "", //确认登录密码
      payPwd: "", //支付密码
      inviteCode: "", //邀请码id
      pickerShow: false,
      dateTime: '',
      inputTime: "",
      genderList: [
        {
          name: '男',
          value: 1
        },
        {
          name: '女',
          value: 2
        },
        {
          name: '未知',
          value: 3
        },
      ],
      genderValue: 1,
    };
  },
  onLoad() {},
  methods: {
    login() {
      if (!this.userPhone || this.userPhone.length < 6) {
        return this.$base.show(this.$t("loginAccount"));
      } else if (!this.password || this.password.length < 6) {
        return this.$base.show(this.$t("loginPass"));
      } else if (this.password != this.confirmLoginPwd) {
        return this.$base.show(this.$t("twoPwd"));
      } else if (!this.payPwd || this.payPwd.length < 6) {
        return this.$base.show(this.$t("payPwd"));
      } else if (!this.inviteCode || this.inviteCode.length < 6) {
        return this.$base.show(this.$t("inviteCode"));
      }
      const DATA_OBJ = {
        loginPwd: this.password,
        userName: this.userPhone,
        confirmLoginPwd: this.confirmLoginPwd,
        payPwd: this.payPwd,
        inviteCode: this.inviteCode,
      };
      this.loading = true;
      this.$api
        .user_register(DATA_OBJ)
        .then((res) => {
          if (res.data.code == 0) {
            uni.setStorage({
              key: "token",
              data: res.data.token,
              success: function () {
                uni.switchTab({ url: "/pages/personal" });
              },
            });
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
    navigateToFn() {
      uni.navigateTo({
        url: "/pages/login",
      });
    },
    register() {
      if (uni.getStorageSync("token")) {
        uni.removeStorage({
          key: "token",
          success: (res) => {
            this.navigateToFn();
          },
        });
      } else {
        this.navigateToFn();
      }
    },
    pikerChange(e){
      this.inputTime = changetime(e.value)
      console.log(this.inputTime)
      this.pickerShow = false
    }
  },
};
</script>

<style scoped lang="scss">
.logo {
  display: flex;
  justify-content: center;
  padding-top: 60rpx;
  .img {
    width: 40%;
  }
}
.btns {
  text-align: center;
  padding: 40rpx 0 0;

  .register {
    color: #2196f3;
    font-size: 32rpx;
    margin-top: 40rpx;
  }
}
.form {
  padding: 40rpx 40rpx 0;
  width: 100%;
  box-sizing: border-box;
  .form-item{
    margin-bottom: 20rpx;
    color: #666;
    .form-title{
      margin-bottom: 10rpx;
    }
  }
}
.gender-box{
  display: flex;
  .gender-item{
    flex: 1;
  }
}
</style>
