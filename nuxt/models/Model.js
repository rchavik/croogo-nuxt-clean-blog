import { Model as BaseModel } from 'vue-api-query'
import config from '~/nuxt.config.js'

export default class Model extends BaseModel {

  // define a base url for a REST API
  baseURL () {
    return config.api.baseUrl;
  }

  // implement a default request method
  request (config) {
    config.headers = {
      Accept: 'application/json',
    }
    return this.$http.request(config)
  }
}
