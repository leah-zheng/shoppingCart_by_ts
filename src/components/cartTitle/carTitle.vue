<template>
  <div class="cart-title cover">
      <h1>购物车</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({
    name: "CartTitle"
})
export default class CartTitle extends Vue {}
</script>

<style scoped lang="scss">
.cart-title {
    display: flex;
    width: 1226px;
    height: 3.5rem;
    margin: 1.6rem auto 0;
    align-items: center;

    h1 {
        font-weight: bold;
    }
}
</style>
