let croogoConfig = {}
try {
  croogoConfig = require('./croogo.config.js').default
} catch (e) {
  throw 'croogo.config.js not found. Please run bin/cake nuxtified.config generate first'
}

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: croogoConfig.title || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: croogoConfig.tagline || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/startbootstrap-clean-blog/5.0.8/css/clean-blog.min.css' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/filters',
    '~plugins/vue-api-query',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  api: {
    baseUrl: 'http://mysite.test/api/v1.0'
  },
}
