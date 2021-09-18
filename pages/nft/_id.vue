<template>
  <v-container>
     <h3> {{ $route.params.id }}</h3>

    <!-- <only-nft-list :nft="nft"  /> -->

    <only-my-nft-list :nft="data" />

  </v-container>
</template>

<script>
import OnlyNftList from '@/components/OnlyNftList.vue'
import OnlyMyNftList from '@/components/OnlyMyNftList.vue'
  export default {
    components: {
      OnlyNftList, OnlyMyNftList,
    },
    data: () => ({
      nft: [],
      data: []
    }),
    // async asyncData({ params, $axios }) {
    //   return  await $axios.$get(`https://api.coinranking.com/v2/nft/${params.id}`)
    //   .then(response => {
    //     let nft = response.data.nft
    //     return { nft }
    //   })
    // },
    
      async asyncData({params, $axios}) {
        return await $axios.$get(`http://nft-backend.test/api/nft/${params.id}`)
            .then(response => {
                let data = response.data
                return { data }
            }).catch(error => {
              console.log('Request cancelled' , error)
          })
      },
      // async mounted() {
      //    await this.$axios.$get(`http://nft-backend.test/api/nft/${this.$route.params.id}`)
      //       .then(response => {
      //           this.data = response.data
      //       }).catch(error => {
      //         console.log('Request cancelled' , error)
      //     })
      // },
  }
</script>
<style scoped>
.s{
    float:right;
}
.fix{
  display:flex;
  padding-top: 50px;
  margin-left:300px;
  margin-bottom:50px;
}
</style>