<template>
  <div v-if="distPopVisible" class="addr-data-wrap">
    <div class="addr-data">
      <div @click="hidde()" class="close">
        <img src="./images/close.png">
      </div>
      <div class="title">所在地区</div>
      <div class="address">
        <span @click="deleProvince()">{{selectedProvince}}</span>
        <b v-if="provinceBorder"></b>
        <span @click="deleCity()">{{selectedCity}}</span>
        <b v-if="cityBorder"></b>
        <span>{{selectedDistrict}}</span>
        <span class="check">请选择</span>
      </div>
      <ul>
        <li
          v-for="(item,index) in districtData"
          :key="index"
          @click="selectCity(index,item)"
        >{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import addressData from './data.js'
const addressCtrl = {
  name: 'addressCtrl',
  props: {
    distPopVisible: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      addressDta: {
        name: '',
        telephone: '',
        province: '',
        city: '',
        area: '',
        address: '',
        isDefault: '',
      },
      receiverAddress: '',
      // distPopVisible: false,
      selectedProvince: '',
      selectedCity: '',
      selectedDistrict: '',
      districtData: [],
      provinceBorder: false,
      cityBorder: false,
      type: 1,
      cityIndex: '',
    }
  },
  created() {
    this.districtData = addressData[86]
  },
  mounted() {},
  computed: {
    checkParams() {
      // return (this.mobileNum && this.codeNum && this.staffNum && this.email)
    },
  },
  methods: {
    // loadList() {
    //   http({
    //     method: 'get',
    //     url: api.userDeliveryList + '?token=' + localStorage.token,
    //   }).then(res => {
    //     this.loding = true
    //     let data = res.data.userDeliveryList[this.Addtype]
    //     this.addressDta = {
    //       name: data.receiverName,
    //       telephone: data.receiverTelephone,
    //       province: data.province,
    //       city: data.city,
    //       area: data.area,
    //       address: data.address,
    //       isDefault: data.isDefault,
    //       id: data.id,
    //     }
    //     this.receiverAddress =
    //       data.province + '、' + data.city + '、' + data.area
    //   })
    // },
    hidde() {
      this.close()
      if (browserName == 'Chrome WebView') {
        RHNativeJS.visablePtrFrame(false)
      }
    },
    deleProvince() {
      this.selectedProvince = ''
      this.selectedCity = ''
      this.provinceBorder = false
      this.cityBorder = false
      this.districtData = addressData[86]
      this.type = 1
    },
    deleCity() {
      this.selectedCity = ''
      this.cityBorder = false
      this.type = 2
      this.districtData = addressData[this.cityIndex]
    },
    selectCity(index, value) {
      if (this.type == 1) {
        this.selectedProvince = value
        if (this.selectedProvince != '') {
          this.provinceBorder = true
        }
        this.type = 2
        this.cityIndex = index
        this.districtData = addressData[index]
      } else if (this.type == 2) {
        this.selectedCity = value
        if (this.selectedCity != '') {
          this.cityBorder = true
        }
        this.type = 3
        this.districtData = addressData[index]
      } else if (this.type == 3) {
        this.selectedDistrict = value
        this.addressDta.province = this.selectedProvince
        this.addressDta.city = this.selectedCity
        this.addressDta.area = this.selectedDistrict
        this.receiverAddress =
          this.selectedProvince +
          '、' +
          this.selectedCity +
          '、' +
          this.selectedDistrict
        this.close()
      }
    },
    close() {
      let data = {
        province: this.selectedProvince,
        city: this.selectedCity,
        area: this.selectedDistrict,
        receiverAddress: this.receiverAddress
      };
      this.$emit('close', data);
    },
  },
}

export default addressCtrl
</script>

<style lang="less" scoped>
.addr-data-wrap {
  z-index: 9999;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.addr-data-wrap .addr-data {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 4.45rem;
  width: 100%;
  background: #fff;
  font-size: 0.14rem;
  color: #333;
}
.addr-data-wrap .addr-data .close {
  position: absolute;
  right: 0.2rem;
  top: 0.15rem;
  width: 0.1rem;
  height: 0.1rem;
}
.addr-data-wrap .addr-data .close img {
  width: 100%;
  vertical-align: top;
}
.addr-data-wrap .addr-data .title {
  text-align: center;
  margin-top: 0.13rem;
  line-height: 100%;
  margin-bottom: 0.24rem;
}
.addr-data-wrap .addr-data .address {
  margin-bottom: 0.15rem;
  padding: 0 0.1rem;
  font-size: 0;
}
.addr-data-wrap .addr-data .address span {
  font-size: 0.14rem;
}
.addr-data-wrap .addr-data .address .check {
  color: #ee3f44;
}
.addr-data-wrap .addr-data .address b {
  display: inline-block;
  height: 0.1rem;
  width: 1px;
  background: #ccc;
  margin: 0 0.1rem;
}
.addr-data-wrap .addr-data ul {
  height: 3.665rem;
  overflow: scroll;
}
.addr-data-wrap .addr-data ul li {
  height: 0.5rem;
  line-height: 0.5rem;
  padding: 0 0.1rem;
  border-top: 1px solid #ececec;
}
</style>
