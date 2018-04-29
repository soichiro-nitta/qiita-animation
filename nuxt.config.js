module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'qiita-animation',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Josefin+Sans:400,700' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/earlyaccess/notosansjapanese.css' }
    ]
  },
  css: [
    '~/assets/css/default.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Plugins
  */
  plugins: [
    '~/plugins/mixin'
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'gsap'
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
