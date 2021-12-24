// propTypes 类型检查
// 就是在使用组件的时候 给组件传递特定的 props 组件才会展示对应的内容，那么如何约束父组件传递的 props，就是用 propTypes 类型检查
import { Component } from 'react'
// prop-types 这个包来处理类型检查， 这个包已经默认下载好了，无需重新下载
import PropTypes from 'prop-types'
export default class PropTypesDemo extends Component {
  static propTypes = {
    imgSrc: function (props, propName, componentName) {
      // 自定义的校验函数接收三个参数
      // props 组件接收的所有 prop
      // propName 当前的 prop 名
      // componentName  组件名
      // 返回值是一个错误提示 new Error
      // console.log(props[propName])   当前的 prop 的值
      // console.log(propName)
      // console.log(componentName)
      if (!props[propName].includes('https://')) {
        return new Error(
          'Invalid prop `' + propName + '` supplied to' +
          ' `' + componentName + '`. Validation failed. this prop must includes `https://`'
        );
      }
    },
    title: PropTypes.string,
    description: PropTypes.string.isRequired
  }

  static defaultProps = {
    title: '默认标题'
  }
  // 该组件是一个图片卡片组件   
  // 需要父组件提供图片地址  标题   图片描述
  render = () => {
    const { imgSrc, title, description } = this.props
    return (
      <div className='card'>
        <img src={imgSrc} alt="" />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    )
  }
}

// 类型检查
// PropTypesDemo.propTypes = {
//   imgSrc: function (props, propName, componentName) {
//     // 自定义的校验函数接收三个参数
//     // props 组件接收的所有 prop
//     // propName 当前的 prop 名
//     // componentName  组件名
//     // 返回值是一个错误提示 new Error
//     // console.log(props[propName])   当前的 prop 的值
//     // console.log(propName)
//     // console.log(componentName)
//     if (!props[propName].includes('https://')) {
//       return new Error(
//         'Invalid prop `' + propName + '` supplied to' +
//         ' `' + componentName + '`. Validation failed. this prop must includes `https://`' 
//       );
//     }
//   },
//   title: PropTypes.string,
//   description: PropTypes.string.isRequired
// }
// 设置默认值
// PropTypesDemo.defaultProps = {
//   title: '默认标题'
// }




// class Demo {
//   static propTypes = {
//     a: 100
//   }
//   static defaultProps = {}
// }

// 给 Demo 这个类添加 propTypes 属性，其实就相当于在 Demo 类里面创建了一个静态属性
// 类的静态属性和方法 只有类本身才能调用，类的实例无法使用
// Demo.propTypes = {

// }

// console.log(Demo.propTypes)
// console.log(new Demo().propTypes)
