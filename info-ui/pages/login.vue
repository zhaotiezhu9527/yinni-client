<template>
  <view class="page">
    <u-navbar
      placeholder
      :title="$t('login')"
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
      <view class="logo">
        <image
          class="img"
          mode="widthFix"
          src="../static/img/login_logo1.png"
        />
        <view class="nation">
          <image
            class="nation-img"
            mode="widthFix"
            src="../static/img/vietnam.png"
          />
          <view class="nation-text">{{$t('languageType')}}</view>
        </view>
      </view>
      <view class="from">
        <view class="from-title">
          <view class="from-title-text">
            {{$t('welcome')}}
          </view>
          <view class="from-title-big">
            {{$t('appName')}}
          </view>
        </view>
        <u-form ref="uForm" labelPosition="left" labelWidth="124">
          <u-form-item :label="$t('account')" class="login-item">
            <template #label>
              <image
                class="login-img"
                src="../static/img/user3.png"
                mode="widthFix"
              />
            </template>
            <u-input
              type="text"
              :placeholder="$t('noPhone')"
              clearable
              border="none"
              v-model="phone"
            ></u-input>
          </u-form-item>
          <u-form-item :label="$t('password')" class="login-item">
            <template #label>
              <image
                class="login-img"
                src="../static/img/pass2.png"
                mode="widthFix"
              />
            </template>
            <u-input
              type="password"
              :placeholder="$t('noPassword')"
              clearable
              border="none"
              v-model="loginPwd"
            >
          </u-input>
          </u-form-item>
        </u-form>
        <view class="btns">
          <u-button
            class="custom-style"
            color="linear-gradient(to right, #0382c7,#11a9c6,#7966f3)"
            block
            @click="login"
            :loading="loading"
          >
            {{ $t("login") }}
          </u-button>
          <view class="dividing-line-box">
            <view class="dividing-line"></view>
            <view class="dividing-line-text">{{$t('orText')}}</view>
            <view class="dividing-line"></view>
          </view>
          <u-button
            class="custom-style"
            color="linear-gradient(to right, #0382c7,#11a9c6,#7966f3)"
            block
            @click="register"
          >
          {{ $t("register") }}
          </u-button>
          <view class="register" @click="goService">
            {{$t('forgetPassword')}}
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      loginPwd: "",
      phone: "",
      loading: false,
    };
  },
  methods: {
    changeLang(e) {
      this.$i18n.locale = e;
      uni.setStorageSync("lang", e);
    },
    register() {
      uni.navigateTo({
        url: "/pages/register",
      });
    },
    login() {
      if (!this.phone) {
        return this.$base.show(this.$t("noPhone"));
      } else if (!this.loginPwd) {
        return this.$base.show(this.$t("noPassword"));
      }
      const DATA_OBJ = {
        loginPwd: this.loginPwd,
        phone: this.phone,
      };
      this.loading = true;
      this.$api
        .user_login(DATA_OBJ)
        .then((res) => {
          if (res.data.code == 0) {
            // 记录token过期时间
            uni.setStorageSync("dateTime", new Date().getTime());
            uni.setStorage({
              key: "token",
              data: res.data.token,
              success: function () {
                uni.switchTab({ url: "/pages/index" });
              },
            });
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
    // 跳转客服
    goService(){
      uni.navigateTo({
        url: "/pages/onlineService",
      });
    }
  },
};
</script>

<style scoped lang="scss">
.wrap{
  background: linear-gradient(
    to right,
    #0382c7,
    #11a9c6,
    #7966f3,
  );
}
view,
text {
  font-size: 32rpx;
}
.logo {
  display: flex;
  justify-content: center;
  padding-top: 20rpx;
  padding-bottom: 20rpx;
  position: relative;
  .img {
    width: 50%;
  }
  .nation{
    position: absolute;
    top: 20rpx;
    right: 0rpx;
    color: #fff;
    font-size: 24rpx;
    width: 200rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    .nation-img{
      width: 30%;
    }
    .nation-text{
      margin-left: 20rpx;
      font-size: 24rpx;
    }
  }
}
.btns {
  text-align: center;
  padding: 40rpx 0;
  .custom-style {
    border-radius: 10rpx;
    margin-bottom: 20rpx;
    font-size: 32rpx;
    height: 88rpx;
  }
  .register {
    color: #2196f3;
    font-size: 32rpx;
    margin-top: 40rpx;
  }
}
.from {
  padding: 40rpx;
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 80rpx 80rpx 0px 0px;
  .login-img{
    width: 44rpx;
    margin: 0 24rpx;
  }
  .login-item{
    margin-top: 20rpx;
  }
  .dividing-line-box{
    display: flex;
    align-items: center;
    margin: 20rpx 0;
    .dividing-line{
      flex: 1;
      height: 2rpx;
      background-color: #eee;
    }
    .dividing-line-text{
      color: #999;
      font-size: 28rpx;
      margin: 20rpx;
    }
  }
  .from-title{
    width: 100%;
    text-align: center;
    .from-title-text{
      color: #999;
      font-size: 24rpx;
    }
    .from-title-big{
      color: #0b79b3;
      font-size: 60rpx;
      font-weight: 800;
      margin-top: 10rpx;
      margin-bottom: 40rpx;
    }
  }
}
.login-nav{
  background: linear-gradient(
    to right,
    #0382c7,
    #11a9c6,
    #7966f3,
  );
}
</style>
