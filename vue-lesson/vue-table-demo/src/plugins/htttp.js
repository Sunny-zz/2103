import axios from "./axios";

// 所有的请求封装

// 请求文章列表
export function getPostList(method = 'GET'){
  return axios({
    method: method,
    url: '/postList'
  })
}
// 修改文章
