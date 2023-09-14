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
                :placeholder="$t('search')"
                v-model="addr"
              />
            </view>
            <view class="position-right-text" @click="show = true">
              | 
              <image class="position-img" src="../static/img/position.png" />
              <text>{{$t('hoChiMinh')}}</text>
            </view>
          </view>
          <view class="position-info">
            {{$t('medicalList')}}（0）
          </view>
        </view>
        <view class="kongbai"></view>
        <view class="img-box">
          <image class="img" src="../static/img/construction.jpeg" />
        </view>
        <view class="text-box">
          {{$t('noData')}}
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
				{ name:'An Giang ',value: 1,},
				{ name: 'Bà Rịa – Vũng Tàu ',value: 2,},
				{ name: 'Bắc Giang ',value: 3,},
				{ name: 'Bắc Kạn ',value: 4,},
				{ name: 'Bạc Liêu ',value: 5,},
				{ name: 'Bắc Ninh ',value: 6,},
				{ name: 'Bến Tre ',value: 7,},
				{ name: 'Bình Định ',value: 8,},
				{ name: 'Bình Dương ',value: 9,},
				{ name: 'Bình Phước',value: 10,},
				{ name: 'Bình Thuận',value: 11,},
				{ name: 'Cà Mau',value: 12,},
				{ name: 'Cần Thơ',value: 13,},
				{ name: 'Cao Bằng',value: 14,},
				{ name: 'Đà Nẵng',value: 15,},
				{ name: 'Đắk Lắk',value: 16,},
				{ name: 'Đắk Nông',value: 17,},
				{ name: 'Điện Biên',value: 18,},
				{ name: 'Đồng Nai',value: 19,},
				{ name: 'Đồng Tháp',value: 20,},
				{ name: 'Gia Lai ',value: 21,},
				{ name: 'Hà Giang ',value: 22,},
				{ name: 'Hà Nam ',value: 23,},
				{ name: 'Hà Nội ',value: 24,},
				{ name: 'Hà Tĩnh',value: 25,},
				{ name: 'Hải Dương',value: 26,},
				{ name: 'Hải Phòng ',value: 27,},
				{ name: 'Hậu Giang  ',value: 28,},
				{ name: 'Hòa Bình  ',value: 29,},
				{ name: 'Hưng Yên ',value: 30,},
				{ name: 'Khánh Hòa ',value: 31,},
				{ name: 'Kiên Giang',value: 32,},
				{ name: 'Kon Tum',value: 33,},
				{ name: 'Lai Châu',value: 34,},
				{ name: 'Lâm Đồng',value: 35,},
				{ name: 'Lạng Sơn',value: 36,},
				{ name: 'Lào Cai',value: 37,},
				{ name: 'Long An',value: 38,},
				{ name: 'Nam Định',value: 39,},
				{ name: 'Nghệ An',value: 40,},
				{ name: 'Ninh Bình',value: 41,},
				{ name: ' Ninh Thuận',value: 42,},
				{ name: 'Phú Thọ',value: 43,},
				{ name: 'Phú Yên',value: 44,},
				{ name: 'Quảng Bình',value: 45,},
				{ name: 'Quảng Nam',value: 46,},
				{ name: 'Quảng Ngãi',value: 47,},
				{ name: 'Quảng Ninh',value: 48,},
				{ name: 'Quảng Trị',value: 49,},
				{ name: 'Sóc Trăng',value: 50,},
				{ name: 'Sơn La',value: 51,},
				{ name: 'Tây Ninh',value: 52,},
				{ name: 'Thái Bình',value: 53,},
				{ name: 'Thái Nguyên',value: 54,},
				{ name: 'Thanh Hóa',value: 55,},
				{ name: 'Thừa Thiên Huế',value: 56,},
				{ name: 'Tiền Giang',value: 57,},
				{ name: 'TP Hồ Chí Minh',value: 58,},
				{ name: 'Trà Vinh',value: 59,},
				{ name: 'Tuyên Quang',value: 60,},
				{ name: 'Vĩnh Long',value: 61,},
				{ name: 'Vĩnh Phúc',value: 62,},
				{ name: 'Yên Bái',value: 63,},
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
      width: 30rpx;
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
  height: 80vh;
  overflow: scroll;
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
