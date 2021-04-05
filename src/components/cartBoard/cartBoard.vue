<template>
  <section class="cart-board cover">
    <div class="container">
      <ul class="cart-board-title">
        <li>选择</li>
        <li>商品名称</li>
        <li>图片</li>
        <li>单价</li>
        <li>数量</li>
        <li>总价</li>
        <li>删除</li>
      </ul>
      <div class="cart-item" v-for="(item,index) in this.CartData" :key="item.productId">
        <div class="cart-item-select">
          <input type="checkbox" @click="editCart('check', index)" :checked="item.checked"/>
        </div>
        <div class="cart-item-name">
          {{ item.productName }}
        </div>
        <div class="cart-item-img">
          <img :src="'/images/'+item.productImage" alt="">
        </div>
        <div class="cart-item-price">{{item.productPrice | currency}}</div>
        <div class="cart-item-count">
          <div class="count-area">
            <a href="javascript:;" @click="editCart('minus', index)">-</a>
            <span>{{item.productCount}}</span>
            <a href="javascript:;" @click="editCart('add', index)">+</a>
          </div>
          </div>
        <div class="cart-item-total">
          <div class="total-price">
            {{ item.productCount * item.productPrice | currency}}
          </div>
        </div>
        <div class="cart-item-remove" @click="removeItem(item)">
          <a href="javascript:;">
            删除
          </a>
        </div>
      </div>
      <div class="cart-board-footer">
        <div class="total-price">
          <div class="price-text">总价：
            <span class="price-num"><span class="total-price">
              {{setTotalPrice | currency}}</span></span>
            <button class="total-btn" @click="checkout">结算</button>
          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { CartBoardItem } from "../../types/index"
import axios from 'axios'

@Component({
    name: "CartBoard",
    filters: {
      currency: function(value: number){
        return value ? '￥'+(value * 1).toFixed(2) : '0.00'
      }
    }
})
export default class CartBoard extends Vue {
  private CartData:CartBoardItem[] = [];

  getCartData(){
    axios.get('/mock/cart.json').then(res => {
      const result = res.data;
      this.CartData = result.data
    })
  }

  editCart(option: string, idx: number){
    switch (option){
      case 'minus':
        this.CartData[idx].productCount --;
        break;
      case 'add':
        this.CartData[idx].productCount ++;
        break;
      case 'check':
        this.CartData[idx].checked = !this.CartData[idx].checked;
        break;
      default:
        break;
    }
  }

  removeItem(opt: CartBoardItem){
    this.CartData.forEach((item,idx) => {
      if(item.productId === opt.productId){
        this.CartData.splice(idx, 1)
      }
    })
  }

  get setTotalPrice(){
    let totalPrice = 0
    this.CartData.forEach((item,idx)=>{
      if(item.checked){
        totalPrice += item.productPrice * item.productCount
      }
    })
    return totalPrice
  }

  checkout(){
    this.$router.push('/address')
  }

  private created(){
    this.getCartData()
  }
}
</script>

<style scoped lang="scss">
$item-total-width: 1226px;

.cart-board {
  .container {
    width: 1226px;
    margin: 0 auto;
    background: #fff;

    .cart-board-title {
      display: flex;
      height: 3rem;
      background: #ddd;

      li {
        display: flex;
        justify-content: center;
        align-items: center;

        &:nth-child(1) {
          width: $item-total-width * 1 / 15;
        }

        &:nth-child(2) {
          width: $item-total-width * 4 / 15;
        }

        &:nth-child(3) {
          width: $item-total-width * 2 / 15;
        }

        &:nth-child(4) {
          width: $item-total-width * 2 / 15;
        }

        &:nth-child(5) {
          width: $item-total-width * 2 / 15;
        }

        &:nth-child(6) {
          width: $item-total-width * 2 / 15;
        }

        &:nth-child(7) {
          width: $item-total-width * 2 / 15;
        }
      }
    }

    .cart-board-footer {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 3rem;
      border: 1px solid #ddd;
      border-top: none;
      padding-left: 2rem;

      .total-price {
        color: #999;
        font-size: 1rem;

        .price-num {
          color: #f20;
          font-weight: bold;
          font-size: 1.2rem;
        }

        .total-btn {
          width: 6rem;
          height: 3rem;
          background: #f40;
          color: #fff;
          font-size: 1rem;
          margin-left: 0.6rem;
        }
      }
    }

    .cart-item {
      display: flex;
      width: 100%;
      height: 8rem;
      border: 1px solid #ddd;
      border-top: none;

      .cart-item-img {
        padding: 1rem;

        img {
          height: 100%;
        }
      }

      .cart-item-count {
        display: flex;
        .count-area {
          width: auto;
          border: 1px solid #ddd;

          a {
            display: flex;
            width: 2rem;
            height: 2rem;
            justify-content: center;
            align-items: center;
            background: #ddd;
          }

          span {
            display: flex;
            width: 2rem;
            height: 2rem;
            justify-content: center;
            align-items: center;
          }
        }
      }

      .cart-item-total {
        .total-price {
          color: #f20;
        }
      }

      div {
        display: flex;
        justify-content: center;
        align-items: center;

        &:nth-child(1) {
          width: $item-total-width * 1 / 15;
        }

        &:nth-child(2) {
          width: $item-total-width * 4 / 15;
        }

        &:nth-child(3) {
          width: $item-total-width * 2 / 15;
        }

        &:nth-child(4) {
          width: $item-total-width * 2 / 15;
        }

        &:nth-child(5) {
          width: $item-total-width * 2 / 15;
        }

        &:nth-child(6) {
          width: $item-total-width * 2 / 15;
        }

        &:nth-child(7) {
          width: $item-total-width * 2 / 15;
        }
      }
    }
  }
}
</style>
