export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'NFT-cli',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: {
    color: 'yellow',
    height: '15px',
    continuous: true,
    duration: 3000
    //  '~/components/LoadingBar.vue'
  },
  
  pageTransition: {
    name: "page",
    mode: "out-in"
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/event-bus.js',
    '~/plugins/vuetify.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  // router: {
  //   middleware: ["auth"]
  // },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'access_token',
          maxAge: 0,
          // required: true,
          // type: 'Bearer'
        },
        endpoints: {
          login: { url: 'http://nft-backend.test/api/login', method: 'post' },
          logout: { url: 'http://nft-backend.test/api/logout', method: 'post' },
          user: { url: 'http://nft-backend.test/api/user', method: 'get' }
        },
        user: {
          property: false,
          // autoFetch: true
        },
      },
    },
    redirect: {
      login: '/auth/login',
      logout: '/',
      callback: '/auth/login',
      home: '/'
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://nft-backend.test/api',
    credentials:true,
    proxy: true 
  },
  proxy: {
    '/api': {
      target: 'http://nft-backend.test/api',
      pathRewrite: { '^/api': '/' }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
