<template>
  <div class="home">
    <mall-header/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MallHeader from '../components/mallHeader/mallHeader.vue'

@Component({
  name: "Home",
  components: {
    MallHeader
  }
})
export default class Home extends Vue {}
</script>
