<template>
  <view class="page">
    <u-navbar
      placeholder
      :border="false"
      autoBack
      :title="config.jiancheng"
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
        <view class="banner">
          <u-swiper :list="list2" class="my-swipe" indicator> </u-swiper>
        </view>
        <view class="notice">
          <u-notice-bar
            color="#ffffff"
            bgColor="#e15241"
            class="border-radius5"
            scrollable
            fontSize="28rpx"
            :text="config.home_notice || ''"
          />
        </view>
        <view class="content">
          <view
            class="item"
            v-for="(item, index) in tabList"
            :key="index"
            @click="tabClick(item)"
          >
            <image class="img" :src="item.img" />
            <text class="txt" :class="activeId == item.id ? 'red-text' : ''">{{ item.name }}</text>
          </view>
        </view>
        
        <!-- <u-tabs :list="tabList" @click="tabClick"></u-tabs> -->
        <view class="list">
          <view
            class="view"
            v-for="(item, index) in shopGoods"
            :key="index"
            @click="routePath(item)"
          >
            <image class="img" :src="item.img" mode="widthFix" />
            <view class="name">
              <text></text>
              <text>{{ item.projectName }}</text>
            </view>
            <view class="rate">
              <view class="li">
                <view class="num"
                  ><text>{{ item.schedule }}</text>
                </view>
                <view class="con">{{ $t("schedule") }}</view>
              </view>
              <view class="li">
                <view class="num">
                  <u-count-down
                    v-show="item.status === 0"
                    :time="item.time * 1000"
                    format="HH:mm:ss"
                    @finish="getList"
                    class="time"
                  ></u-count-down>
                  <view class="time" v-show="item.status === 1">00:00:00</view>
                </view>
                <view class="con">{{ $t("deadline") }}</view></view
              >
              <view class="li">
                <view class="num">
                  <label>{{ $t("money") }}</label
                  ><text>{{ item.minAmount }}</text>
                </view>
                <view class="num">
                  <label>{{ $t("commission") }}</label
                  ><text>{{ Number(Number(item.minAmount) * Number(item.incomeRate / 100)).toFixed(2) }}</text>
                </view>
                <view class="con">{{ $t("minAmount") }}</view></view
              >
            </view>
            <view class="investor">
              <!-- <view class="con">
                <text>
                  {{ $t("scale") }}：{{ item.projectAmount }}{{ $t("money") }}
                </text>
                <text>{{ $t("interest") }}</text>
              </view> -->
              <view class="btn" :class="item.status === 1 ? 'grey-btn' : ''">{{ $t("investment") }}</view>
            </view>
            <!-- <view class="progress">
              <view class="txt">{{ $t("progress") }}：</view>
              <u-line-progress
                :percentage="scheduleFn(item.schedule)"
                :showText="false"
                activeColor="#2196f3"
              ></u-line-progress>
              <view class="number">{{ item.schedule }}%</view>
            </view> -->
          </view>
          <!-- <u-empty
            class="empty2"
            :text="$t('nodata')"
            v-if="!shopGoods.length"
          /> -->
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
import { changetime } from "../plugins/util";
import img0 from "../static/img/func_icon_touzi.png";
import img1 from "../static/img/func_icon_guanyu.png";
import img2 from "../static/img/func_icon_jisuan.png";
import img3 from "../static/img/func_icon_qiandao.png";
import img4 from "../static/img/func_icon_chongzhi.png";
import img5 from "../static/img/func_icon_tixian.png";
import img6 from "../static/img/func_icon_zhuce.png";
import img7 from "../static/img/func_icon_kefu.png";
import banner1 from "../static/img/banner_13.jpg";
import banner2 from "../static/img/banner_14.jpg";
import banner3 from "../static/img/banner_15.jpg";
export default {
  data() {
    return {
      loading: false,
      list: [
        {
          name: this.$t("investmentProject"),
          img: img0,
          path: "/pages/investor",
        },
        { name: this.$t("about"), img: img1, path: "/pages/about" },
        // { name: this.$t("calculator"), img: img2 },
        { name: this.$t("sign"), img: img3 },
        // {
        //   name: this.$t("topUpUSDT"),
        //   img: img4,
        //   path: "/pages/preview",
        // },
        { name: this.$t("mywithdraw"), img: img5, path: "/pages/withdraw" },
        {
          name: this.$t("freeRegistration"),
          img: img6,
          path: "/pages/register",
        },
        {
          name: this.$t("onlineService"),
          img: img7,
          path: "/pages/preview",
        },
      ],
      list2: [banner1, banner2, banner3],
      shopGoods: [
        {
          // time:'00:00:00'
        },
      ],
      config: {},
      infos: {},
      tabList: [], //tab数组
      activeId: 1, //
    };
  },
  async onLoad() {
    await this.$onLaunched;
    this.config = uni.getStorageSync("system_config");
    this.infos = uni.getStorageSync("infos");
  },
  onShow() {
    this.getType();
    this.tabClick({id:1});
    this.getList();
  },
  methods: {
    change({ name, path, url }) {
      if ([this.$t("investmentProject"), this.$t("about")].includes(name)) {
        uni.switchTab({
          url: path,
        });
      } else if (name === this.$t("calculator")) {
        this.$base.show(this.$t("comingSoon") + "！");
      } else if (name === this.$t("freeRegistration")) {
        uni.navigateTo({
          url: path,
        });
      } else if (name === this.$t("sign")) {
        this.$api.user_sign().then(({ data }) => {
          if (data.code == 0) {
            this.$base.show(data.msg + "~");
          }
        });
      } else if ([this.$t("topUpUSDT")].includes(name)) {
        uni.navigateTo({
          url: "/pages/onlineService",
        });
      } else if ([this.$t("onlineService")].includes(name)) {
        uni.navigateTo({
          url: "/pages/onlineService",
        });
      } else if ([this.$t("mywithdraw")].includes(name)) {
        if (!this.infos.bankCardNum && !this.infos.walletAddr) {
          return this.$base.show(this.$t("inputwalletType"));
        } else {
          uni.navigateTo({
            url: "/pages/withdraw",
          });
        }
      }
    },
    routePath(item) {
      if(item.status === 1){
        return
      }else if(item.status === 0){
        this.$api.project_info(item.projectId).then(({ data }) => {
          if (data.code == 0) {
            uni.navigateTo({
              url: `/pages/content?id=${item.projectId}`,
            });
          }
        });
      }
      
    },
    guaranteeCompanyFn(name) {
      return name ? name.charAt(name.length - 1) : "-";
    },
    scheduleFn(page) {
      return (Number(page) > 100 ? 100 : Number(page)) || 0;
    },
    // 点击标签页切换
    tabClick(item) {
      this.activeId = item.id;
      this.getList();
    },
    // 获取所有分类
    getType() {
      this.$api.project_allType().then(({ data }) => {
        if (data.code == 0) {
          this.tabList = data.list;
          this.activeId = data.list[0].id;
        }
      });
    },
    // 获取列表数据
    getList() {
      if (this.loading) return false;
      this.loading = true;
      this.$api
        .project_list({
          id: this.activeId,
        })
        .then(({ data }) => {
          if (data.code == 0) {
            this.loading = false;
            this.shopGoods = data.data;
            for (let index = 0; index < this.shopGoods.length; index++) {
              const item = this.shopGoods[index];
              if (item.time === 0) {
                setTimeout(() => {
                  this.getList();
                }, 1000);
                return false;
              }
            }
          } else {
            this.loading = false;
          }
        });
    },
  },
};
</script>

<style scoped lang="scss">
@import "../static/list.scss";
.list {
  background-color: #fff;
}
.scroll {
  height: calc(100vh - 210rpx + var(--status-bar-height));
}
.page {
  background-color: #fafafa;
}
.banner {
  height: 280rpx;
  background: #4b80af;
  width: 100vw;
  border-bottom-left-radius: 50rpx;
  border-bottom-right-radius: 50rpx;
  padding: 20rpx 30rpx 0;
  box-sizing: border-box;
}
/deep/.u-swiper,
/deep/.u-swiper__wrapper,
.my-swipe {
  height: 350rpx !important;
  border-radius: 20rpx !important;
  .u-swiper__wrapper__item__wrapper__image {
    height: 100% !important;
    border-radius: 20rpx !important;
  }
}
.content {
  
  // display: flex;
  // flex-wrap: wrap;
  // justify-content: space-between;
  overflow: hidden;
  .img {
    width: 70rpx;
    height: 70rpx;
    display: block;
    margin: auto;
  }
  .item {
    padding-top: 40rpx;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // flex-direction: column;
    width: 25%;
    float: left;
  }
  .txt {
    padding-top: 10rpx;
    font-size: 24rpx;
    display: block;
    width: 100%;
    text-align: center;
  }
}
.notice {
  padding: 100rpx 0 0;
  margin: 30rpx 30rpx 0;
  // border-radius: 10rpx;
  overflow: hidden;
  /deep/.uicon-volume {
    font-size: 32rpx !important;
    line-height: 32rpx !important;
  }
}
.empty2 {
  padding-top: 40rpx;
  background-color: #fff;
}
.time /deep/.u-count-down__text {
  font-size: 24rpx;
  color: red;
}
</style>
