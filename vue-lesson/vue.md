## Vue 
前端框架  vue2.x , 使用 vue 框架制作单页面应用(spa  single page application)。使用 虚拟 dom 来操作页面。

## 搭建 vue 开发环境
推荐使用官方提供的 vue-cli 脚手架 ，也可以使用 webpack 搭建
执行 `npm i @vue/cli` 安装官方的脚手架工具。安装好之后可以使用 `vue --version` 查看版本号。
创建开发环境
- 在你想要创建 vue 项目的文件夹内打开命令行工具
- 执行  `vue create 项目名` 创建 vue 项目，其实就是创建好了 vue 的开发环境
- 执行完命令之后会提示一些问题  
    - Please pick a preset 选择一个预设， 选择 vue2 的默认预设
    - Pick the package manager 选择一个包管理工具， 选择 npm  (这个问题可能不会出现)
    - 会根据选择下载所需要的环境
    - 下载完成之后，会出现 成功创建
    - 根据提示的两个命令，运行 vue 项目  
- 创建好之后，再次运行项目的话，直接在项目内运行 `npm run serve` 即可

还有一种创建方式，直接使用 vue-cli(版本2以上) 提供的图形化工具  vue ui 创建开发环境


安装一个谷歌的扩展程序 vuedevtools 辅助开发。

## 搭建好的 vue 项目的文件和文件夹介绍
- node_modules 文件夹   项目依赖
- package-lock.json 所有依赖的信息
- package.json   scripts 字段    dependencies     devDependencies
- README.md 项目介绍文件
- .gitignore 文件  作为 git 仓库的忽略上传文件记录
- public 文件夹 是 vue 单页面应用的页面模版文件夹(你的 vue 项目会以 public 下的 index.html 为模板)
- babel.config.js  babel 的配置文件
- src 文件夹   项目源代码(敲 vue 的地方)
    - main.js 项目的入口文件(也就是 webpack 打包编译的入口文件)
    - App.vue vue 最外层组件(相当于 body)
    - components 文件夹内 放的是很多组件(相当于页面中的很多结构)
    - assets 文件夹 一般放图片 


## vue 组件
在 vue 项目开发过程中，并不需要以前的 html文件  css文件  js文件，而是以组件形式的开发模式。一个组件可以认为是页面中的任何一个结构。
组件是一个 .vue 后缀的文件，在整个 vue 项目中，所有文件都可以被当做模块，使用 es6 的模块语法进行导入导出。
vue 组件的构成, 组件名首字母大写 或者 烤串方式 
- template 标签 相当于之前的 html 结构  
    - tamplate 只能有一个子级


- script 标签  js
    - 只能默认导出一个对象，而且这个对象内的属性和方法是 vue 提供的
    - vue 组件内要做交互的话，要本着 数据变页面变 的原则，所以想要控制页面的变化，先创建对应的数据，然后数据和页面绑定，最后直接修改数据 页面就随之改变了。注意每个组件内的数据是独立的。不同组件间不能直接操作其他组件内的数据

- style 标签  css


组件的嵌套
- 在父组件中导入需要使用的子组件
- 在父组件中 js内 导出的对象下写一个 components 属性,该属性的属性值是一个对象, 一般属性名和子组件名相同，值是子组件本身, 我们称这个 components 设置为 组件的注册
- 在 template 中，使用 组件名作为标签名 展示对应的组件,标签一般写成 单闭合标签

组件内数据的创建 使用 和修改
- 在 组件的 script 标签内的导出对象内添加一个 data 属性，该属性的属性值是函数，需要要返回一个对象
- 在组件的 tempalte 内如何使用 数据，vue 提供了 模版语法




## 模版语法
按照数据在标签位置的不同分为两种
- 两个标签之间
    直接使用 {{数据的属性名}}
    ```html
        <div class="box">{{text}}</div>
    ```
    ```js
        export default {
            ...

            data: () => ({
                isActive: false,
                text: '啊哈哈哈哈哈哈'
            })
        }
    ```
    当插入的值是 html 字符串的时候就不能直接使用 {{}} 需要使用 v-html 指令

- 属性内（指令方式）  v-bind 指令  可以缩写成 :
    使用 v-bind 指令给属性绑定数据

模版语法内可以写 js 表达式 (可以得到一个具体的值的语句)
也就是说模板语法内只要最后得到一个值即可

## class 与 style 的绑定
就是如何将 data 与 class 和 style 这两个属性进行关联
class 的绑定 就是 v-bind:class 后面的值怎么写
- 对象语法

- 数组语法

- 数组语法中使用对象语法

- js 表达式

style 的绑定 就是 v-bind:style 后面的值怎么写

- js 表达式

- 对象语法

- 数组语法 就是数组内放对象


## 事件处理
如何给组件内的元素绑定事件,使用指令 v-on(简写成 @) 绑定点击事件，是在标签上直接绑定事件(类似原来的行内事件)
v-on 指令 需要传递事件名作为参数 比如 click  mouseenter 等， 值有很多种写法
v-on 的值常用的写法
1. 函数， 函数需要定义在 导出的对象下的 methods 属性内, 该属性的属性值是一个对象, 对象内只写方法, 内部的方法就可以当做事件的事件函数，可以直接使用函数名绑定在指令上
    - 当方法作为事件函数时，默认会接受一个 事件对象作为参数，函数(普通函数写法)内的 this 指的是当前组件。所以方法被当作事件的话不能使用箭头函数
2. 直接写 js 操作，但是必须和 data 有关的, 也就是直接修改 data , 无需使用 xxx.data名  直接对 data 就行修改即可

3. 函数调用, 该写法主要用于给事件函数传递参数, 什么都不传递， 什么都接收不到，所以需要任何参数都得传递
    - 使用 $event 向下传递事件对象

事件修饰符  v-on 指令的修饰符, 修饰符可以连续使用， 但是顺序是有影响的
- stop 阻止事件冒泡
- precent 阻止默认行为  
- self 点击绑定元素本身才会触发，点内部的其他元素不会触发
- once 只触发一次

按键修饰符 其实就是当事件是键盘事件的时候可以使用一些按键修饰符
- .按键名
- .按键码  要被废弃了

为什么在 HTML 中监听事件？
参考官方文档


## 条件渲染
一般用来实现元素(标签)的添加或者删除, 使用指令 v-if  v-else  v-else-if 来实现

也可以实现css的消失和出现， 使用指令 v-show

该指令的值是布尔值，给的不是布尔值得话，会自动转化成布尔值
v-else-if 只能紧跟着 v-if
v-else 只能紧跟着 v-if  v-else-if 
中间不能有任何的其他元素
v-if 一般会搭配 v-for 一起使用

当我们想要同时条件渲染多个元素的时候，可以将多个元素使用 template 标签包裹，然后给 template 加 v-if 指令。为什么不直接使用 div 包裹呢，因为 template 不会渲染任何的标签，就是一个空的。但是 div 会额外渲染一个标签

用 key 管理可复用的元素

v-show 和 v-if 的区别
1. 功能上前者是 css 的控制，后者真正的消失和出现
2. 后者切换开销较大，频繁切换不推荐使用，推荐使用前者
3. 前者初始渲染开销较大，不管元素出不出现，都需要渲染。当两个初始状态都是 false 时作比较。 


## 列表渲染
一般用来实现一组相同类型的元素的渲染。使用 v-for 指令实现。
一般列表渲染，都是根据数组数据，在页面渲染出对应的 列表结构
指令的值写的是vue 的循环写法， x  in  arr  ， arr 表示需要循环的数组， x 表示数组内的每一项 还可以写成  (x,y) in arr 和上面类似，只不过多了一个 y(索引)， 表示的是 x 对应的位置。 x  y 可以任意换名

使用 v-for 指令的时候，必须添加 key 属性，而且要保证每一个 key 的值是独一无二的

数组更新检测
当数据是数组的时候，在 template 中使用了 v-for 。此时我们修改数组，想让页面也跟着改变，但是并不是我们学过的所有方式都会引起页面的变化，也就是说有些对数组的修改操作，并不会导致页面的改变.
哪些修改数组的操作，不能引起视图的变化
- 数组[index] 直接对数组修改
- 数组.length = n  直接对数组修改


v-for 的循环可以循环数组  循环对象  循环数值

可以在 template 上使用 v-for ，循环包含多个元素的内容。template 不会渲染任何的标签, 但是 template 上不能添加 key，需要给内部所有的元素加 key

在组件上使用 v-for 


## 表单输入绑定
在 vue 中，我们常用的表单， vue 认为输入内容或者选择，需要使用 data 控制。
当定义好了 data 的时候，表单的数据绑定，一般需要两个步骤 
1. 展示 data
2. 提供修改 data 的事件
3. 可以直接使用 v-model 指令替代上面两个步骤

v-model 指令修饰符
- lazy  当 input 使用 v-model 的时候默认的修改事件是 input 也就是输入内容数据就改变。加了 lazy 之后，变成 chang 事件，也就是失去焦点后数据才会改变

- number 只有输入数字才会修改数据

- trim 会自动删除左右的空白， 但是最后的结果变成了字符串形式


## 组件的复用

- prop 主要实现的是  内容不同
    - 如何使用?
    在定义复用组件的时候，将可以变化的内容，定义成 prop。 prop 其实是需要父组件传递给子组件的。
    - 在父组件中使用子组件的时候可以传递 prop，其实就相当于给标签传递属性
    - 子组件要接收父组件传递的，需要在导出的对象内添加一个 props 属性,属性值可以是数组或对象.数组的话每一项就是一个父组件传递的属性，要写成属性名字符串。

## prop
父组件传递给子组件的属性
在父组件中怎么使用?

在子组件中如何接收?
- 数组    ['属性名',...]
- 对象
    - 对象的属性名写成父组件传递过来的属性名，属性值写成一个对象, 该对象内可以设置 type  default  required  validator
    - 对象的属性名写成父组件传递过来的属性名，属性值就是一个值的类型 或者是 数组  例如  props: { text: String, bgColor: [String, Number] }

当需要将对象下的所有属性一个一个的传递给子组件，可以使用 v-bind 指令简写
prop 是单项的， 只能父传子，而且子不能修改 prop。

## 计算属性


## 侦听器


## 自定义事件

.native  给子组件的根元素绑定原生事件
$listeners  替代自定义事件的接收
.sync 

## 生命周期 
vue 实例(vue 组件)在初始化的过程中都会执行一些默认的函数, 还有在更新 data 以及组件销毁的时候都会自动执行一些函数。我们称这些函数叫生命周期钩子。所有钩子函数都是同步函数。

初始化
- beforeCreate
- created  发送 ajax 请求更新 data  (其实也可以在 mounted 中发)
- beforeMount
- mounted 

更新  data 发生改变，并且这个改变会引起视图的变化(dom 要改变)
- beforeUpdate 
- updated

销毁
- beforeDestroy
- destroyed


## vue 组件间的交互
- prop  父组件传递数据给子组件     当传递的数据是函数，子组件调用函数并传递参数，其实也相当于子组件传递数据给父组件
- 自定义事件   $emit('事件名', 参数)
- $listeners  $attrs

## vue 中第三方工具的使用
比如 axios  lodash  等等
需要先下载，然后使用
下载方式
1. npm 命令行使用 npm 下载
2. 使用图形化界面下载
根据环境(@vue/cli)的区分,将第三方插件分为两大类
1. 依赖
2. 插件(比较常用例如 route  elementui ..... ，安装方式不一样)
根据包的功能分为两种安装方式
1. 运行 项目必须的  axios  
2. 开发 项目非必须的比如 压缩 优化等等

使用的时候当作模块导入使用即可

### vue 中常用的插件
在 @vue/cli 4.5.0 环境下使用的
- axios 
- 样式类  less  sass  stylus(少)     
    less sass stylus Css预处理器 css扩展语言,其实就是高级的 css 写法， 需要编译 默认 vue 的官方环境中 自带了 less 和 sass stylus 的编译无需添加配置，就是需要下载对应包，直接使用即可。要注意 包的 版本。
    - less 的安装及使用
        - 直接安装 less 以及 less-loader  `npm i less less-loader --save-dev` less 4.1.2  less-loader 5 可用 10 不可用
        - 使用的话两种方式 1. 直接在组件的 style 内使用 lang='less' style 就可以写 less 语法了 2. 使用 xx.less 文件新建样式文件，内部写 less 语法
    - sass 的安装及使用
        - 直接安装 node-sass 以及 sass-loader `npm i node-sass sass-loader --save-dev`  node-sass 4   sass-loader 8
        - 使用的话 1. 直接在组件的 style 内使用 lang='scss' style 就可以写 sass 语法了   2. 使用 xx.scss 文件新建样式文件，内部写 sass 语法
    - stylus 的安装及使用
        - 直接安装 stylus 以及 stylus-loader `npm i stylus stylus-loader --save-dev` stylus 0.55  stylus-loader 3
        - 使用的话 1. 直接在组件的 style 内使用 lang='stylus' style 就可以写 stylus 语法了   2. 使用 xx.stylus 文件新建样式文件，内部写 stylus 语法
- lodash 
- swiper 原生 js 插件。  也就是插件内使用的真实 dom 操作，并不是 vue 的组件形式的。初始化的时候要在 mounted 初始化
- vue-awesome-swiper 
- element-ui  vue 的组件库， vue  ui 库(view ui  vuetify  mint ui)  ，就是已经写好的组件直接去使用。    


## 插槽 slot
组件复用的一个技巧
使用 
父组件
`<子组件><template #名 v-slot:名 >插槽1</template> 插槽2</子组件>`

子组件
`<slot />   <slot name='名' />`

具名插槽

作用域插槽

## 指令
v- 为前缀的 叫指令，指令值可以写成 js 表达式，当值改变的时候，会响应式的影响对应 dom。

指令参数，指令的冒号后面添加的叫 参数，参数一般是 html 标签的属性

指令修饰符


常用指令
- v-bind 
- v-html

## vue 路由  vue-router
- 安装    
    - 直接 npm i vue-router 
    - 使用 vue cli 提供给的插件方式安装
- 创建
    - 导入 VueRouter 使用 Vue.use(VueRouter) 将路由变成全局的
    - 创建路由
        - 创建路由数组 routes   
        - 创建路由实例 
    - 将创建好的路由导入main，挂载到创建 vue 的根实例内
- 使用
    - router-view 根据页面地址展示路由组件(默认只会展示最外层的路由)
    - router-link 切换页面地址

动态路由
编程式导航
重定向和别名

路由创建好之后，所有的组件内都可以使用 $route  $router 两个属性
路由组件传参其实就是可以将动态路由参数当作 prop 传递给路由组件，也可以传递其他的数据

路由组件的使用  router-link  router-view 的一些 prop 或 插槽

router-link
- v-slot
- to  {path: '/about'}  {name: '', query: {}, params: {}}
- tag 
- replace 
- append *
- active-class  
- exact 

### 提示
- vue 项目内没有特殊情况不能使用 原生的 dom 操作


### 起名
大驼峰  FirstNameX
小驼峰  firstNameX
烤串    first-name-x






