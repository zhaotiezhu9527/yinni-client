<script>
import { genTestUserSig, aegisID } from "./pages/TUIKit/debug/index.js";
import { TIM, TIMUploadPlugin, Aegis } from './pages/TUIKit/debug/tim.js';
const aegis = new Aegis({
    id: aegisID, // 项目key
    reportApiSpeed: true, // 接口测速
});
uni.$aegis = aegis;
const config = {
  userID: "test01", //User ID
  SDKAppID: 1600002539, // Your SDKAppID
  secretKey: "e05fb6e437025f12385953543c200b3ec90502e6286fdf69eb40a12d0269bdec", // Your secretKey
};
const userSig = genTestUserSig(config).userSig;
uni.$chat_SDKAppID = config.SDKAppID;
uni.$chat_userID = config.userID;
uni.$chat_userSig = userSig;
// 创建 sdk 实例
uni.$TUIKit = TIM.create({
  SDKAppID: uni.$chat_SDKAppID,
});
uni.$TIM = TIM;
// 注册文件上传插件
uni.$TUIKit.registerPlugin({
  "tim-upload-plugin": TIMUploadPlugin,
});
export default {
  onLaunch: function () {
    this.bindTIMEvent();
    this.login();
  },
  methods: {
    login() {
      // login TUIKit
      uni.$TUIKit.login({ userID: config.userID, userSig }).then((res) => {
        // sdk 初始化，当 sdk 处于ready 状态，才可以使用API，文档
        uni.showLoading({
          title: "初始化...",
        });
      });
    },
    bindTIMEvent() {
      uni.$TUIKit.on(uni.$TIM.EVENT.SDK_READY, this.handleSDKReady);
      uni.$TUIKit.on(uni.$TIM.EVENT.SDK_NOT_READY,this.handleSDKNotReady);
      uni.$TUIKit.on(uni.$TIM.EVENT.KICKED_OUT, this.handleKickedOut);
    },
    // sdk ready 以后可调用 API
    handleSDKReady(event) {
      uni.$chat_isSDKReady = true;
      uni.hideLoading();
    },
    handleSDKNotReady(event) {
      uni.showToast({
        title: "SDK 未完成初始化",
      });
    },
    handleKickedOut(event) {
      uni.clearStorageSync();
      uni.showToast({
        title: `${this.kickedOutReason(event.data.type)}被踢出。`,
        icon: "none",
      });
    },
    kickedOutReason(type) {
      switch (type) {
        case uni.$TIM.TYPES.KICKED_OUT_MULT_ACCOUNT:
          return "多实例登录";
        case uni.$TIM.TYPES.KICKED_OUT_MULT_DEVICE:
          return "多设备登录";
        case uni.$TIM.TYPES.KICKED_OUT_USERSIG_EXPIRED:
          return "userSig 过期";
        case uni.$TIM.TYPES.KICKED_OUT_REST_API:
          return "REST API kick 接口踢出";
        default:
          return "";
      }
    },
    loginFn() {
      return new Promise((resolve, reject) => {
        this.$api
          .get_login(this.form)
          .then((data) => {
            resolve(data);
          })
          .catch(() => {
            reject();
          });
      });
    },
  },
  created() {
    console.log(1)
    this.loginFn().then((res) => {
      console.log(res)
    })
  }
};
</script>
<style>
/*每个页面公共css */
</style>