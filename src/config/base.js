export default {
  version: process.env.VUE_APP_VERSION,
  env: {
    development: process.env.NODE_ENV === 'development',
    staging: process.env.NODE_ENV === 'staging',
    production: process.env.NODE_ENV === 'production',
  },
}
