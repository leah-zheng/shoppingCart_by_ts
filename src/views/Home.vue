<template>
  <div class="home">
    <mall-header/>
    <cart-title/>
    <cart-board/>
    <mall-footer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MallHeader from '../components/mallHeader/mallHeader.vue'
import CartTitle from '../components/cartTitle/carTitle.vue'
import CartBoard from '../components/cartBoard/cartBoard.vue'
import MallFooter from '../components/mallFooter/mallFooter.vue'

@Component({
  name: "Home",
  components: {
    MallHeader,
    CartTitle,
    CartBoard,
    MallFooter,
  }
})
export default class Home extends Vue {}
</script>
