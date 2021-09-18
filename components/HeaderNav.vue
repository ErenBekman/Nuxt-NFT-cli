<template>
   <v-toolbar >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <nuxt-link to="/">
      <v-toolbar-title>NFT Sea</v-toolbar-title>
      </nuxt-link>

      <v-spacer></v-spacer>

      <v-btn class="y" v-if="$auth.loggedIn">
         <nuxt-link to="/">{{ $auth.user.name }}</nuxt-link>
      </v-btn>
      <v-btn class="y">
         <nuxt-link to="/nft/list">ALL NFTs</nuxt-link>
      </v-btn>
      <v-btn class="y">
      <nuxt-link to="/nft/rankings">Rankings</nuxt-link>  
      </v-btn>


      <v-btn class="y">
        <nuxt-link to="/nft/create">Create</nuxt-link>  
      </v-btn>


      <v-btn class="y" @click.prevent="logout()" v-if="$auth.loggedIn">
        <nuxt-link to="/auth/login">Log Out</nuxt-link>  
      </v-btn>
      <v-btn class="y" v-if="!$auth.loggedIn">
        <nuxt-link to="/auth/login">LogIn</nuxt-link>  
      </v-btn> 

    </v-toolbar>
</template>




<script>
  export default {
    data: () => ({

    }),
    methods: {
       async logout(){
         await  this.$auth.logout()
    }
  }
}
</script>

<style scoped>
.color{
    color: white;
}
.select{
    color: yellow;
}
.y{
  margin: 15px;
}
</style>