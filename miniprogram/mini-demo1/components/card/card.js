// components/card/card.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgSrc: {
      type: String,
      value: ''
    },
    imgInfo: {
      type: String,
      value: '默认图片信息'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  // 在组件定义时的选项中启用多slot支持
  options: {
    multipleSlots: true 
  },
})
