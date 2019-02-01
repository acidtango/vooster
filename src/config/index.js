const Config = {
  apiUrl: process.env.API_URL,
  version: process.env.VUE_APP_VERSION,
  env: {
    development: process.env.NODE_ENV === 'development',
    staging: process.env.NODE_ENV === 'staging',
    production: process.env.NODE_ENV === 'production',
  },
}

export default Config
