// news相关的 API 接口，都封装到这个模块中
import axios from 'axios'

import request from '@/utils/requestNews.js'

// 向外按需导出一个 API 函数
export const getNewChannelAPI = () => {
  return request.get('/types', {
    params: {
      app_id: 'wlwjocjtzkjbliun',
      app_secret: 'cHVQd21NaFg3VVJjWHMwUURQYkEyUT09'
    }
  })
}

axios.defaults.baseURL = '/apis'

// 向极速数据免费新闻接口获取新闻列表
export const getNewsListAPI = page => {
  return request.get('/list', {
    params: {
      typeId: 518,
      page: page,
      app_id: 'wlwjocjtzkjbliun',
      app_secret: 'cHVQd21NaFg3VVJjWHMwUURQYkEyUT09'
    }
  })
}
