<template>
  <div>
    <collection-nft :mynft="nft" />
  </div>
</template>

<script>
import CollectionNft from '@/components/CollectionNft.vue'
export default {
  components: {
    CollectionNft
  },
  async asyncData({$axios}) {
    return await $axios.$get('http://nft-backend.test/api/nft')
      .then(response => {
        let nft = response.data
        return { nft }
      })
  },
}
</script>

<style>

</style>