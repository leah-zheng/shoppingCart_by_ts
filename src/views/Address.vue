<template>
  <div>
    <mall-header/>
    <section class="address-title">
      <div class="container">
        <h1>配送地址</h1>
      </div>
    </section>
    <section class="address-board">
      <ul class="address-list">
        <li class="address-item" :class="{checked:checkedIndex === index}" v-for="(item,index) in this.showAddressData" :key="item.addressId" @click="checkedIndex = index">
          <dl>
            <dt>{{ item.userName }}</dt>
            <dt class="street-name">{{item.streetName}}</dt>
            <dt class="tel">{{item.tel}}</dt>
          </dl>
          <div class="set-default">
            <a href="javascript:;" v-if="!item.isDefault" @click="setDefault(item)">
              <span>设为默认</span>
            </a>
          </div>
          <div class="default" v-if="item.isDefault">
            默认地址
          </div>
          <div class="address-delete">
            <a href="javascript:;" @click="deleteAddress(index)">删除</a>
          </div>
        </li>
        <span class="address-more" >
        <a href="javascript:;" @click="showMore">查看更多
          <span class="icon-arrow-down" :class="{'open':showCount > 3}"></span>
        </a>
      </span>
      </ul>
      
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { AddressItem } from "../types/index"
import MallHeader from "../components/mallHeader/mallHeader.vue"
import axios from "axios"

@Component({
  name: 'Address',
  components: {
    MallHeader
  }
})
export default class Address extends Vue {
  private addressData:AddressItem[] = []
  private checkedIndex:number = 0
  private showCount:number = 3

  getAddressData(){
    axios.get('/mock/address.json').then(res => {
      const result = res.data
      this.addressData = result.data
    })
  }

  deleteAddress(idx: number){
    this.addressData.splice(idx,1)
  }

  setDefault(item: AddressItem){
    this.addressData.map((elem, idx) => {
      if(elem.addressId === item.addressId){
        elem.isDefault = true
      }else{
        elem.isDefault = false
      }
    })
  }
  
  get showAddressData(){
    return this.addressData.slice(0,this.showCount)
  }

  showMore(){
    if(this.showCount < this.addressData.length){
      this.showCount = this.addressData.length
    }else{
      this.showCount = 3
    }
  }

  created(){
    this.getAddressData()
  }
}
</script>

<style lang="scss">
.address-title {
  width: 1226px;
  margin: 1.6rem auto 0;
}

.address-board {
  width: 1226px;
  margin: 0 auto;
  font-size: 0.9rem;

  .address-list {
    display: flex;
    flex-wrap: wrap;

    .address-item {
      position: relative;
      width: 20rem;
      height: 10rem;
      border: 2px solid #ddd;
      background: #fff;
      margin-right: 3rem;
      padding: 1rem 2rem 0;
      cursor: pointer;
      margin-top: 2rem;

      dt {
        font-size: 1rem;
      }

      .street-name {
        height: 2rem;
        line-height: 2rem;
        margin-bottom: 1rem;
      }

      .tel {
        height: 1.5rem;
        line-height: 1.5rem;
        margin-bottom: 1rem;
      }

      .address-delete {
        position: absolute;
        bottom: 0.7rem;
        right: 2rem;
      }

      .set-default {
        display: none;
      }

      .set-default,
      .default {
        position: absolute;
        bottom: 0.7rem;
        left: 2rem;
        color: #ff6700;

        a {
          color: #ff6700;
          &:hover {
            color: #d45b0a;
          }
        }
      }
    }

    .address-item.checked {
      border-color: #ff6700;
      border-width: 2px;

      .set-default {
        display: block;
      }
    }
  }
}

.address-more {
  width: 1226px;
  margin: 0 auto;
  padding: 1.5rem 0;
  text-align: center;

  a {
    color: #ff6700;
  }
}

.icon-arrow-down {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-left: 2px solid #ff6700;
  border-bottom: 2px solid #ff6700;
  transform: rotate(-45deg);
  margin-left: 0.05rem;
  margin-bottom: 0.1rem;
  transition: all 0.3s ease-out;
}

.icon-arrow-down.open {
  transform: rotate(135deg);
  margin-left: 0.07rem;
  margin-bottom: 0;
}
</style>


