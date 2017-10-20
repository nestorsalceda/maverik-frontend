const axios = require('axios')

class HttpClient {
  post(url) {
    return axios.post(url)
  }
}

class LightsService {
  constructor(httpClient) {
    this._httpClient = httpClient
  }

  async turnOn() {
    this._httpClient.post('http://maverik:4567/enable')
  }

  async turnOff() {
    this._httpClient.post('http://maverik:4567/disable')
  }
}

exports.HttpClient = HttpClient
exports.LightsService = LightsService
