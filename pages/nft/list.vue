<template>
  <div>
      <ul>   
      <h1>NFT LIST</h1> <br> <br>
      <nft-list :nft="nfts"></nft-list>
    </ul>

  </div>
</template>

<script>
import NftList from '@/components/NftList.vue'
export default {
    components: { NftList },
    data() {
        return {  
        };
    },
    computed : {
        nfts() {
          return this.$store.getters.getNft 
        }
    }
}
</script>

<style scoped>

</style>