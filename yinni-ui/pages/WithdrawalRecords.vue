<template>
  <view class="page">
    <u-navbar
      placeholder
      :title="$t('WithdrawalRecords')"
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
      <view class="title">
        <view class="title-amount">{{ $t("withdrawalMoney") }}</view>
        <!-- <view class="line"></view> -->
        <view class="title-remark">{{ $t("operationTime") }}</view>
        <!-- <view class="line"></view> -->
        <view class="title-amount">{{ $t("status") }}</view>
      </view>
      <u-list @scrolltolower="load" v-if="isArray" class="scroll">
        <u-list-item v-for="(item, index) in list" :key="index">
          <view class="content">
            <view class="table-money">
              {{ item.amount }}
            </view>
            <!-- <view class="line"></view> -->
            <view class="table-title">{{ item.time }}</view>
            <!-- <view class="line"></view> -->
            <view class="table-money" v-if="item.status === 0">
              {{ $t("waitReview") }}
            </view>
            <view class="table-money" v-else-if="item.status === 1">
              {{ $t("withdrawalSuccess") }}
            </view>
            <view class="table-money" v-else-if="item.status === 2">
              {{ $t("withdrawalError") }}
            </view>
          </view>
        </u-list-item>
        <view class="loading" v-if="loading">{{ $t("loading") }}...</view>
        <view class="nomore" v-if="finished">{{ $t("finished") }}</view>
      </u-list>
      <u-empty class="empty" :text="$t('nodata')" v-else />
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [], //列表数据
      loading: false,
      finished: false,
      isArray: false,
      page: 0,
    };
  },
  onLoad() {
    this.list = [];
    uni.showLoading();
    this.page = 1;
    this.dataFn();
  },
  methods: {
    load() {
      if (this.loading || this.finished) return false;
      this.page++;
      this.dataFn(this.page);
    },
    dataFn(page = 1, limit = 20) {
      this.loading = true;
      this.$api
        .user_withdraw_list({ page, limit })
        .then((res) => {
          if (res.data.code == 0) {
            const vim = res.data.page;
            this.list = this.list.concat(vim.list);
            this.isArray = vim.totalCount ? true : false;
            if (this.page >= vim.totalPage) {
              this.finished = true;
            }
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
@import "../static/record.scss";
</style>
