import request from '../plugins/axios'

// 获取便签列表
export function getNotes() {
  return request({
    method: 'get',
    url: '/notes'
  })
}

// 添加新的便签


// 修改某一个便签

