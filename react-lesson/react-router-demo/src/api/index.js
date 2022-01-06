// 所有的请求接口
import request from "../plugins/axios";

// 登录请求
export function login(token) {
  return request({
    url: '/accesstoken',
    method: 'post',
    data: {
      accesstoken: token
    }
  })
}

// 文章列表请求
export function getTopics(tab = 'all', page = 1) {
  return request({
    url: '/topics',
    method: 'get',
    params: {
      page,
      limit: 40,
      tab: tab
    }
  })
}
