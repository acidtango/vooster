import baseConfig from './base'

const Config = {
  ...baseConfig,
  apiUrl: process.env.API_URL,
}

export default Config
