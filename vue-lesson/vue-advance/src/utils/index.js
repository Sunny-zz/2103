// 公共方法  
const getMenuListAndAuths = (menu) => {
  // menu 是扁平化数组
  // console.log(menu)
  const menuList = []
  // menuList 是树形数组
  const sourceMap = {}
  const auths = []
  menu.forEach(ele => {
    auths.push(ele.auth)
    sourceMap[ele.id] = ele
  })

  menu.forEach(ele => {
    if(ele.pid === -1){
      menuList.push(ele)
    }else{
      // 找到 ele.pid 对应的那个 id 的元素
      // 反复的使用find查找对应的元素 计算量太大
      // 我们可以考虑使用对象的属性来替代查找
      // 数组内的查找，以及对象属性的查找  后者快很多
      const parentMenu = sourceMap[ele.pid]
      parentMenu.children ? parentMenu.children.push(ele) : parentMenu.children = [ele]
    }
  })
  return {menuList, auths}
}


export {getMenuListAndAuths}

