// 文章相关的 API 接口，都封装到这个模块中

import request from '@/utils/request.js'

// 向外按需导出一个 API 函数
export const getArticleListAPI = (_page, _limit) => {
  return request.get('/articles', {
    params: {
      _page: _page,
      _limit: _limit
    }
  })
}
