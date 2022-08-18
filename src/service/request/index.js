import axios from 'axios'
import { baseURL, timeout } from './request.config'

class Request {
  constructor() {
    const instance = axios.create({
      baseURL: baseURL,
      timeout: timeout
    })

    instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => {
        console.log(err)
      }
    )
    this.instance = instance
  }
  getRequest(url, config) {
    return this.instance.get(url, config)
  }
  postRequest(url, config) {
    return this.instance.post(url, config)
  }
}

export default Request
