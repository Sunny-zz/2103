import request from '../plugins/axios'

// 获取便签列表（包括查询）
export function getNotes(_page = 1, searchText, _limit = 9) {
  const params = searchText ?
    {
      title_like: searchText,
      _page,
      _limit
    } :
    {
      _limit,
      _page
    }
  return request({
    method: 'get',
    url: '/notes',
    params: params
  })
}
// 搜索便签
// export function searchNotes(searchText, _page = 1, _limit = 9) {
//   return request({
//     method: 'get',
//     url: `/notes`,
//     params: {
//       title_like: searchText,
//       _page,
//       _limit
//     }
//   })
// }

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


