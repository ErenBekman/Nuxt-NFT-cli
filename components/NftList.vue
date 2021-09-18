<template>
  <div>
    <!-- <v-main> -->
      <v-container>
            <v-row>
              <v-col class="flex" 
              v-for="(n,index) in nft"
              :key="index"
              cols="2"
              >
              <nuxt-link :to="`/nft/${n.id}`">
            <v-card
              class="pxx mt-2"
              max-width="344"
            >
              <v-img
                :src="`${n.image}`"
                height="150px"
              ></v-img>

              <v-card-title>
                <strong>Nft Adi :</strong> {{ n.name }} <br>
              </v-card-title>
        
              <v-card-subtitle>
                <strong>Id : </strong> {{ n.id }}  <br> 
                <strong>Price : </strong> {{ n.price }} <br>
                <strong>Dolar : </strong>  {{ n.priceInDollar }}$ 
              </v-card-subtitle>

            </v-card>
            </nuxt-link>
        </v-col>
      </v-row>
      </v-container>
      <!-- </v-main> -->
  </div>
</template>



<script>
export default {
  props:['nft'],
    data() {
        return {
            nfts: [],
            show: false,
        }
    },
}
</script>

<style scoped>
.flex{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:20px;
  margin: 20px;
}
.pxx{
  margin-bottom: 75px;
}
</style>