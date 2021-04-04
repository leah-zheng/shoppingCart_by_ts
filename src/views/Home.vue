<template>
  <div class="home">
    <mall-header/>
    <cart-title/>
    <cart-board/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MallHeader from '../components/mallHeader/mallHeader.vue'
import CartTitle from '../components/cartTitle/carTitle.vue'
import CartBoard from '../components/cartBoard/cartBoard.vue'

@Component({
  name: "Home",
  components: {
    MallHeader,
    CartTitle,
    CartBoard,
  }
})
export default class Home extends Vue {}
</script>
