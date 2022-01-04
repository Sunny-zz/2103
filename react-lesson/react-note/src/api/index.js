import request from '../plugins/axios'

// 获取便签列表
export function getNotes(_page = 1, _limit = 9) {
  return request({
    method: 'get',
    url: '/notes',
    params: {
      _limit,
      _page
    }
  })
}

// 添加新的便签
export function addNote(note) {
  return request({
    method: 'post',
    url: `/notes`,
    data: note
  })
}

// 修改某一个便签
export function editNote(id, editNote) {
  return request({
    method: 'put',
    url: `/notes/${id}`,
    data: editNote
  })
}

