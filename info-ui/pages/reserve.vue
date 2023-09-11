<template>
  <view class="page">
    <u-navbar
      placeholder
      :title="$t('reserve')"
      :border="false"
      autoBack
      fixed
      safe-area-inset-top
      bgColor="#4babf8"
      leftIconColor="#fff"
      leftIconSize="32"
      height="52px"
      titleStyle="color:#fff;font-weight:500;font-size:32rpx;"
    >
    </u-navbar>
    <view class="wrap">
      <view class="content">
        <view class="position-box">
          <view class="position-input">
            <view class="search-icon">
              <u-icon name="search"></u-icon>
            </view>
            <view class="position-value">
              <input 
                placeholder="Tìm kiếm"
                v-model="addr"
              />
            </view>
            <view class="position-right-text" @click="show = true">
              | 
              <img class="position-img" src="../static/img/position.png" />
              <text>Hồ Chí Minh</text>
            </view>
          </view>
          <view class="position-info">
            Danh sách cơ sở y tế （0）
          </view>
        </view>
        <view class="kongbai"></view>
        <view class="img-box">
          <image class="img" src="../static/img/construction.jpeg" />
        </view>
        <view class="text-box">
          描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
        </view>
      </view>
      <u-action-sheet @close="show = false" round="10" @select="selectClick" :title="title" :show="show">
        <view class="sheet-box">
          <u-search placeholder="Tìm kiếm" class="search-box" height="60" :showAction="false" v-model="addr" @change="changeSearch"></u-search>
          <view class="height15"></view>
          <view class="sheet-addr" :class="listId == item.value ? 'active' : ''" @click="changeAddr(item)" v-for="(item,index) in list" :key="index">
            <text class="sheet-addr-text">{{ item.name }}</text>
            <u-icon v-if="listId == item.value" name="checkbox-mark" class="sheet-addr-icon" color="#4579e0"></u-icon>
          </view>
        </view>
      </u-action-sheet>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      config: {}, //配置
      title:'Chọn tỉnh/thành phố',
			list: [
				{
					name:'Danh sách cơ sở y tế ',
          value: 1,
				},
				{
					name: 'Danh sách cơ sở y tế ',
          value: 2,
				},
				{
					name: 'Danh sách cơ sở y tế ',
          value: 3,
				},
				{
					name: 'Danh sách cơ sở y tế ',
          value: 4,
				},
				{
					name: 'Danh sách cơ sở y tế ',
          value: 5,
				},
				{
					name: 'Danh sách cơ sở y tế ',
          value: 6,
				},
			],
			show: false,
      listId: 0,// 选中哪个地址
      addr: '',//地址
    };
  },
  onShow() {
    // this.systemFn()
  },
  methods: {
    systemFn(){
      this.$api.system_config().then(({ data }) => {
        if (data.code == 0) {
          this.config = data.data
        }
      });
    },
    selectClick(index){
			console.log(index)
		},
    // 搜索时间
    changeSearch(){

    },
    // 选择地址
    changeAddr(item){
      let self = this
      self.listId = item.value
      self.addr = item.name
    }
  },
};
</script>

<style scoped lang="scss">
.kongbai{
  height: 250rpx;
}
.img-box{
  width: 80%;
  margin: auto;
  .img{
    width: 100%;
  }
}
.text-box{
  width: 94%;
  margin: auto;
  font-size: 24rpx;
  text-align: center;
  margin-top: 20rpx;
}
.btn-box{
  width: 70%;
  height: 74rpx;
  margin: auto;
  background:linear-gradient(to right,#2789fb,#4daef3) ;
  border-radius: 74rpx;
  text-align: center;
  line-height: 74rpx;
  color: #fff;
  font-size: 28rpx;
  margin-top: 240rpx;
}
.position-box{
  width: 100%;
  background-color: #eef1f8;
  height: 160rpx;
  padding-top: 20rpx;
  .position-input{
    display: flex;
    background-color: #fff;
    height: 60rpx;
    border-radius: 60rpx;
    align-items: center;
    width: 90%;
    margin: auto;
    .position-img{
      height: 30rpx;
      margin: 0 20rpx;
    }
    .position-right-text{
      color: #999;
      font-size: 24rpx;
      margin-right: 20rpx;
    }
    .position-value{
      flex: 1;
    }
    .search-icon{
      margin-left: 20rpx;
    }
  }
  .position-info{
    width: 90%;
    margin: auto;
    margin-top: 20rpx;
  }
}
.sheet-box{
  width: 90%;
  margin: auto;
  .height30{
    height: 15rpx;
  }
  .sheet-addr{
    height: 80rpx;
    border-bottom: 1px solid #eee;
    line-height: 80rpx;
    text-align: left;
    display: flex;
    &.active{
      background-color: #eaf2ff;
    }
    .sheet-addr-text{
      flex: 1;
    }
    .sheet-addr-icon{
      margin-right: 50rpx;
    }
  }
}
</style>
