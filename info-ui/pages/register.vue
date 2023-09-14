<template>
  <view class="page">
    <u-navbar
    placeholder
      :title="$t('register')"
      :border="false"
      autoBack
      fixed
      leftIconSize="0"
      safe-area-inset-top
      class="linear"
      height="52px"
      titleStyle="color:#fff;font-weight:500;font-size:32rpx;"
    >
    </u-navbar>
    <view class="wrap">
      <view class="form">
        <u-form ref="uForm" labelPosition="left" labelWidth="124">
          <!-- 姓名 -->
          <u-form-item>
            <!-- <template #label>
              <text class="input-label">{{$t('userName')}} * </text>
            </template> -->
            <u-input
              type="text"
              :placeholder="$t('userName') + ' *'"
              border="none"
              v-model="realName"
            >
            </u-input>
          </u-form-item>
          <!-- 手机号 -->
          <u-form-item class="register-item">
            <u-input
              type="text"
              :placeholder="$t('phoneNo') + ' *'"
              border="none"
              v-model="phone"
            >
            </u-input>
          </u-form-item>
          <!-- 密码 -->
          <u-form-item class="register-item">
            <u-input
              type="password"
              :placeholder="$t('password') + ' *'"
              border="none"
              v-model="loginPwd"
            ></u-input>
          </u-form-item>
          <!-- 确认密码 -->
          <u-form-item class="register-item">
            <u-input
              type="password"
              :placeholder="$t('confirmPwd') + ' *'"
              border="none"
              v-model="confirmLoginPwd"
            ></u-input>
          </u-form-item>
          <!-- 性别 -->
          <!-- <u-form-item class="register-item"> -->
            <view class="form-title">{{ $t('sex') }} * </view>
              <u-radio-group 
              v-model="gender"
              placement="row"
              size="40"
              class="gender-box">
            <u-radio class="gender-item" v-for="(item,index) in genderList" :key="index" :label="item.name" :name="item.value">
            </u-radio>
          </u-radio-group>
          <!-- </u-form-item> -->
          <!-- 国籍 -->
          <u-form-item class="register-item">
            <u-input
              type="text"
              :placeholder="$t('nationality') + ' *'"
              border="none"
              v-model="nationality"
            >
            </u-input>
          </u-form-item>
          <!-- 出生日期 -->
          <u-form-item class="register-item">
            <view class="birth-box" @click="pickerShow = true">
              <view class="birth-text font-grey" v-if="!birth">{{ $t('birth') + ' *' }}</view>
              <view class="birth-text" v-else-if="birth">{{ birth }}</view>
              <view class="birth-icon"><u-icon name="calendar" size="50"></u-icon></view>
            </view>
            
          </u-form-item>
          <!-- 身份id 护照 -->
          <u-form-item class="register-item">
            <u-input
              type="text"
              :placeholder="$t('cardID') + ' *'"
              border="none"
              v-model="idCard"
            ></u-input>
          </u-form-item>
         
          <!-- 银行卡名字 -->
          <u-form-item class="register-item">
            <u-input
              type="text"
              :placeholder="$t('bank') + ' *'"
              border="none"
              v-model="bankName"
            >
            </u-input>
          </u-form-item>
          <!-- 银行卡号 -->
          <u-form-item class="register-item">
            <u-input
              type="text"
              :placeholder="$t('bankNo') + ' *'"
              border="none"
              v-model="bankCard"
            >
            </u-input>
          </u-form-item>
           <!-- 工作 -->
           <u-form-item class="register-item">
            <u-input
              type="text"
              :placeholder="$t('job') + ' *'"
              border="none"
              v-model="work"
            ></u-input>
          </u-form-item>
          <!-- 省份 -->
          <u-form-item class="register-item">
            <u-input
              type="text"
              :placeholder="$t('provinceCity') + ' *'"
              border="none"
              v-model="city"
            >
            </u-input>
          </u-form-item>
          <!-- 区县 -->
          <u-form-item class="register-item">
            <u-input
              type="text"
              :placeholder="$t('district') + ' *'"
              border="none"
              v-model="region"
            >
            </u-input>
          </u-form-item>
          <!-- 邮箱 -->
          <u-form-item class="register-item">
            <u-input
              type="text"
              :placeholder="$t('email') + ' *'"
              border="none"
              v-model="email"
            >
            </u-input>
          </u-form-item>
          <!-- 地址 -->
          <u-form-item class="register-item">
            <u-input
              type="text"
              :placeholder="$t('address') + ' *'"
              border="none"
              v-model="address"
            >
            </u-input>
          </u-form-item>
          <!-- 验证码 -->
          <u-form-item class="register-item">
            <u-input
              type="text"
              :placeholder="$t('verificationCode') + ' *'"
              border="none"
              v-model="yzm"
            >
            </u-input>
          </u-form-item>
        </u-form>
      </view>
      <view class="btns">
        <u-button
          class="btn-class"
          color="linear-gradient(to right, #0382c7,#11a9c6,#7966f3)"
          block
          @click="login"
          :loading="loading"
        >
          {{ $t("register") }}
        </u-button>
        <u-button
          class="btn-class margin-top10"
          color="linear-gradient(to right, #0382c7,#11a9c6,#7966f3)"
          block
          @click="register"
        >
          {{ $t("login") }}
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
      yzm: "",//验证码
      loading: false,
      pickerShow: false,
      dateTime: '',
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
    };
  },
  onLoad() {
  },
  methods: {
    login() {
      if (!this.phone) {
        return this.$base.show(this.$t("phoneNo") + this.$t("isEmpty"));
      } else if (!this.loginPwd || this.loginPwd.length < 6) {
        return this.$base.show(this.$t("password") + this.$t('incorrectFormat'));
      } else if (this.loginPwd != this.confirmLoginPwd) {
        return this.$base.show(this.$t("inconsistentTwice"));
      } else if (!this.realName) {
        return this.$base.show(this.$t("userName") + this.$t("isEmpty"));
      } else if (!this.bankCard) {
        return this.$base.show(this.$t("bankNo") + this.$t("isEmpty"));
      } else if (!this.bankName) {
        return this.$base.show(this.$t("bank") + this.$t("isEmpty"));
      } else if (!this.birth) {
        return this.$base.show(this.$t("birth") + this.$t("isEmpty"));
      } else if (!this.gender) {
        return this.$base.show(this.$t("gender") + this.$t("isEmpty"));
      } else if (!this.idCard) {
        return this.$base.show(this.$t("cardID") + this.$t("isEmpty"));
      } else if (!this.nationality) {
        return this.$base.show(this.$t("nationality") + this.$t("isEmpty"));
      } else if (!this.city) {
        return this.$base.show(this.$t("provinceCity") + this.$t("isEmpty"));
      } else if (!this.email) {
        return this.$base.show(this.$t("email") + this.$t("isEmpty"));
      } else if (!this.address) {
        return this.$base.show(this.$t("address") + this.$t("isEmpty"));
      } else if (!this.work) {
        return this.$base.show(this.$t("job") + this.$t("isEmpty"));
      } else if (!this.region) {
        return this.$base.show(this.$t("district") + this.$t("isEmpty"));
      } else if (!this.yzm) {
        return this.$base.show(this.$t("verificationCode") + this.$t("isEmpty"));
      } 
      
      const DATA_OBJ = {
        bankCard: this.bankCard,
        bankName: this.bankName,
        birth: this.birth,
        city: this.city,
        gender: this.gender,
        idCard: this.idCard,
        loginPwd: this.loginPwd,
        nationality: this.nationality,
        phone: this.phone,
        realName: this.realName,
        region: this.region,
        work: this.work,
        email: this.email,
        address: this.address,
        yzm: this.yzm,
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
                uni.navigateTo({ url: "/pages/index" });
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
      this.birth = changetime(e.value)
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
    width: 80%;
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
  .img {
    width: 44rpx;
    margin: 0 24rpx;
  }
  .img2 {
    margin-right: 28rpx;
    width: 40rpx;
  }
  .register-item{
    margin-top: 20rpx;
    .birth-box{
      display: flex;
      width: 100%;
      .birth-text{
        flex: 1;
        &.font-grey{
          color: #bbb;
        }
      }
      .birth-icon{
        margin-right: 40rpx;
      }
    }
  }
  .input-label{
    margin: 0 10rpx;
    color: #6d8aa1;
  }
}
.form-title{
  margin: 20rpx 0;
  color: #074d86;
}
.gender-box{
  display: flex;
  .gender-item{
    flex: 1;
  }
}
</style>
