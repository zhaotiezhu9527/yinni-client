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
        <!-- 姓名 -->
        <view class="form-item">
          <view class="form-title">{{ $t('userName') }}  <text class="red-text">*</text></view>
          <u-input
              type="text"
              clearable
              border="surround"
              v-model="userData.realName"
              :disabled="true"
            >
            </u-input>
        </view>
        <!-- 出生日期 -->
        <view class="form-item">
          <view class="form-title">{{ $t('birth') }}  <text class="red-text">*</text></view>
          <u-input
              type="text"
              clearable
              border="surround"
              v-model="userData.birth"
              suffixIcon="calendar"
	            suffixIconStyle="color: #909399"
              @focus="pickerShow = true"
              :disabled="true"
            >
            </u-input>
        </view>
        <!-- 性别 -->
        <view class="form-item">
          <view class="form-title">{{ $t('sex') }}  <text class="red-text">*</text></view>
          <u-radio-group 
              v-model="userData.gender"
              placement="row"
              :disabled="true"
              size="40"
              class="gender-box">
            <u-radio class="gender-item" v-for="(item,index) in genderList" :key="index" :label="item.name" :name="item.value">
            </u-radio>
          </u-radio-group>
        </view>
        <!-- 手机号码 -->
        <view class="form-item">
          <view class="form-title">{{ $t('phoneNo') }}  <text class="red-text">*</text></view>
          <u-input
              type="text"
              clearable
              border="surround"
              v-model="userData.phone"
              :disabled="true"
            >
            </u-input>
        </view>
        <!-- 身份证护照 -->
        <view class="form-item">
          <view class="form-title">{{ $t('cardID') }}  <text class="red-text">*</text></view>
          <u-input
              type="text"
              clearable
              border="surround"
              v-model="userData.idCard"
              :disabled="true"
            >
            </u-input>
        </view>
        <!-- 邮箱 -->
        <view class="form-item">
          <view class="form-title">{{ $t('email') }}  <text class="red-text">*</text></view>
          <u-input
              type="text"
              clearable
              border="surround"
              v-model="userData.email"
              :disabled="true"
            >
            </u-input>
        </view>
        <!-- 省份 -->
        <view class="form-item">
          <view class="form-title">{{ $t('provinceCity') }}  <text class="red-text">*</text></view>
          <u-input
              type="text"
              clearable
              border="surround"
              v-model="userData.city"
              :disabled="true"
            >
            </u-input>
        </view>
        <!-- 区县 -->
        <view class="form-item">
          <view class="form-title">{{ $t('district') }} <text class="red-text">*</text></view>
          <u-input
              type="text"
              clearable
              border="surround"
              v-model="userData.region"
              :disabled="true"
            >
            </u-input>
        </view>
        <!-- 地址 -->
        <view class="form-item">
          <view class="form-title">{{ $t('address') }}  <text class="red-text">*</text></view>
          <u-input
              type="text"
              clearable
              border="surround"
              v-model="userData.address"
              :disabled="true"
            >
            </u-input>
        </view>
      </view>
      <!-- <view class="btns">
        <u-button
          class="btn-class"
          color="#2196f3"
          block
          @click="login"
          :loading="loading"
        >
          提交
        </u-button>
      </view> -->
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
          name: this.$t('male'),
          value: 1
        },
        {
          name: this.$t('female'),
          value: 2
        },
        {
          name: this.$t('otherSex'),
          value: 3
        },
      ],
      userData: {
        phone: "",//手机号，账号
        loginPwd: "",//密码 登录密码
        confirmLoginPwd: "",//确认密码
        realName: "",//姓名
        gender: "",//性别
        nationality: "",//国籍
        birth: "",//出生日期
        idCard: "", //身份id
        bankName: "",//银行名称
        bankCard: "",//银行卡号
        work: "",//工作
        city: "",//省份
        region: "",//区县
        email: "",//邮箱
        address: "",//地址
      }
    };
  },
  onShow() {
    this.getInfo()
  },
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
    pikerChange(e){
      this.inputTime = changetime(e.value)
      console.log(this.inputTime)
      this.pickerShow = false
    },
    // 获取用户信息
    getInfo() {
      this.$api.user_info().then((res) => {
        if (res.data.code == 0) {
          this.userData = res.data.data;
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
.logo {
  display: flex;
  justify-content: center;
  padding-top: 60rpx;
  .img {
    width: 30%;
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
