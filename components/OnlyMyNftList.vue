<template>
  <div>
    <v-container>
      <v-layout row wrap class="fix">
          <v-flex sm4 class="text-xs-center">
            <v-card
              class="mx-auto"
              max-width="374"
            >
              <v-img
                height="250"
                :src="`${nft.image}`"
              ></v-img>
              <v-card-title> {{ nft.name }} </v-card-title> <br> 
              <v-card-text>
                <v-row
                  align="center"
                  class="mx-0"
                >
                </v-row>
                
                <div> <strong> Description : </strong> {{ nft.description }}</div>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex  sm8 offset-sm6>

            <v-card
              class="mx-auto"
              max-width="600"
              tile
            >
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title> Id : </v-list-item-title>
                  <v-list-item-subtitle>{{ nft.id }} </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title> TokenId : </v-list-item-title>
                  <v-list-item-subtitle>{{ nft.tokenId }} </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title> Blockchain : </v-list-item-title>
                  <v-list-item-subtitle>{{ nft.registryBlockchain }} </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title> Price : </v-list-item-title>
                  <v-list-item-subtitle> {{ nft.price }} </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title> Dolar : </v-list-item-title>
                  <v-list-item-subtitle>{{ nft.priceInDollar }} $  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
  </div>
</template>

<script>
  export default {
    props:['nft'],
    data: () => ({
        nft: []
    }),
    methods: {
    },
    mounted() {
        this.$nuxt.refresh()
    },
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