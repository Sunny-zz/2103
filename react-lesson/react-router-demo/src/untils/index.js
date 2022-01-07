// 根据 tag 英文转化成中文
export function translateTab(top, good, tab) {
  if (top) return '置顶'
  if (good) return '精华'
  switch (tab) {
    case 'ask':
      return '问答'
    case 'share':
      return '分享'
    case 'job':
      return '招聘'
    case 'dev':
      return '客户端测试'
    default:
      break;
  }
}