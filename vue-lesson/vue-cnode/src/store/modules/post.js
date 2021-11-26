// 文章详情模块
import axios from '../../plugins/axios'
export default {
  state: () => ({
    // 对象的初始值一般写成 null 不写成 {}
    post: null
  }),
  mutations: {
    getPost(state, post) {
      state.post = post
    },
    changeCollect(state, bool) {
      state.post.is_collect = bool
    },
    // action 点赞行为  值是  up 的话就是点赞  反之 是 down 就是取消点赞
    // id 是评论的 id
    changeUps(state, { id, action }) {
      const userId = JSON.parse(localStorage.getItem('info')).id
      // 点击的那个评论
      const currentReply = state.post.replies.find(ele => ele.id === id)
      if (action === 'up') {
        currentReply.is_uped = true
        currentReply.ups.push(userId)
      } else {
        currentReply.is_uped = false
        currentReply.ups = currentReply.ups.filter(ele => ele !== userId)
      }
      // 除了要修改 is_uped 之外，点赞的个数也要变化 就是要修改 ups， ups 里面存的是点赞用户的 id，
      // 那么点赞时，需要将当前用户的 id push 到 ups 数组, 反之需要删除
    }
  },
  actions: {
    async getPost({ commit }, id) {
      // 当登陆之后在去请求文章详情的话，需要带 assesstoken 参数
      const token = localStorage.getItem('token')
      const url = token ? `/topic/${id}?accesstoken=${token}` : `/topic/${id}`
      const post = await axios.get(url)
      // console.log(post)
      commit('getPost', post.data)
    },
    // 收藏或者取消收藏
    // id 是文章 id    is_collect 是 true 就去做收藏请求  是 false 就做 取消收藏
    // post /topic_collect/collect 收藏主题
    // post /topic_collect/de_collect 取消主题
    async collectHandle({ commit }, { id, is_collect }) {
      const token = localStorage.getItem('token')
      if (is_collect) {
        // 收藏主题
        await axios.post('/topic_collect/collect', { topic_id: id, accesstoken: token })
        commit('changeCollect', true)
      } else {
        // 取消收藏主题
        await axios.post('/topic_collect/de_collect', { topic_id: id, accesstoken: token })
        commit('changeCollect', false)
      }

    },
    // post /reply/:reply_id/ups 为评论点赞或取消点赞
    async upsHandle({ commit }, id) {
      const token = localStorage.getItem('token')
      const res = await axios.post(`/reply/${id}/ups`, { accesstoken: token })
      commit('changeUps', { id: id, action: res.action })
    },
    // post /topic/:topic_id/replies 新建评论
    async addComment ( {dispatch}, {id, content}){
      const token = localStorage.getItem('token')
      await axios.post(`/topic/${id}/replies`, {accesstoken: token, content: content})
      // 请求的返回值  {success: true, reply_id: '5433d5e4e737cbe96dcef312'}   基本上只有一个 新增之后的评论的 id
      // 请求成功之后后台就更新了
      // 其实前端只需要展示出来添加了就可以了,但是有的时候信息较少无法添加
      // 我们可以重新发 getPost 请求，也就是将整个文章详情重新请求，那么新增的评论也就更新了
      dispatch('getPost', id)
    }
  }
}