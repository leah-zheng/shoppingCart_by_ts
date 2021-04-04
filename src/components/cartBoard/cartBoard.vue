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
      <div class="cart-item" v-for="item in this.CartData" :key="item.productId">
        <div class="cart-item-select">
          <input type="checkbox" />
        </div>
        <div class="cart-item-name">
          {{ item.productName }}
        </div>
        <div class="cart-item-img">
          <img :src="'/images/'+item.productImage" alt="">
        </div>
        <div class="cart-item-price">{{item.productPrice}}</div>
        <div class="cart-item-count">
          <div class="count-area">
            <a href="javascript:;">-</a>
            <span>{{item.productCount}}</span>
            <a href="javascript:;">+</a>
          </div>
          </div>
        <div class="cart-item-total">123</div>
        <div class="cart-item-remove">删除</div>
      </div>
      <div class="cart-board-footer">
        <div class="total-price">
          <div class="price-text">总价：
            <span class="price-num">123</span>
            <button class="total-btn">结算</button>
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
    name: "CartBoard"
})
export default class CartBoard extends Vue {
  private CartData:CartBoardItem[] = [];

  getCartData(){
    axios.get('/mock/cart.json').then(res => {
      const result = res.data;
      this.CartData = result.data
    })
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
