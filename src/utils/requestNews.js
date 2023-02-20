import axios from 'axios'

const request = axios.create({
  // 指定请求的根路径
  baseURL: 'https://www.mxnzp.com/api/news'
})

export default request
