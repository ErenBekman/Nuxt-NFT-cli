<template>
    <v-container>
    <v-layout row wrap>
      <v-flex  class="text-xs-center">
        <h1>Welcome to NFT SEA</h1>
      </v-flex> <br> <br> <br> <br> <br> <br> 
      <v-flex  sm12 offset-sm3>
        <blockquote class="blockquote text-xs-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum animi voluptas aperiam et, nostrum earum accusamus officiis <br>
           nulla nam vero cumque dolorum amet ducimus enim, placeat autem ratione facilis illum! <br> <br>
         repudiandae voluptas libero, repellendus itaque aut atque explicabo ea, minus quia!
        </blockquote>
      </v-flex> <br> <br> <br> <br> <br> <br> <br>
      <v-flex  sm12 offset-sm3 class="text-xs-center">
        <nuxt-link to="/auth/login">
              <v-btn>Sign In</v-btn>
        </nuxt-link>
        <nuxt-link to="/auth/register">
              <v-btn>REGISTER</v-btn>
        </nuxt-link>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  // middleware: "auth",
}
</script>




<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

