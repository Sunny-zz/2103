
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { change, increment, initialCounter, subtraction } from './store/actions';
import { useEffect } from 'react';
function App() {
  // getStore 值是一个静态获取 store 数据的方法并不能动态获取
  // 想要动态获取 store 数据，需要借助 react-redux 工具来实现
  // const {counter} = store.getState()

  // 利用 react-redux 的 hook  useSelector 动态获取 store 数据
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  const handleClick = () => {
    // 更新 store 数据需要通过 store 的dispatch 方法发出 action
    // 然后 reducer 函数会自动触发，根据 action 修改 state 并返回
    dispatch(increment())
  }
 
  const handleClick1 = () => {
    dispatch(subtraction())
  }

  const handleClick2 = () => {
    dispatch(change(500))
  }

  useEffect(() => {
    dispatch(initialCounter())
  }, [])

  return (
    <div className="App">
      <h1>hello redux</h1>
      <button onClick={handleClick}>+1</button>
      <button onClick={handleClick1}>-1</button>
      <button onClick={handleClick2}>随意修改</button>
      <p>展示 store 内的 counter: {counter}</p>
    </div>
  );
}

export default App;

// 使用 connect 动态获取 provider 提供的数据
// import './App.css';
// import store from './store';
// import { connect } from 'react-redux'
// function App({counter}) {
  
//   const handleClick = () => {
//     store.dispatch({type: 'increment'})
//   }

//   return (
//     <div className="App">
//       <h1>hello redux</h1>
//       <button onClick={handleClick}>+1</button>
//       <p>展示 store 内的 counter: {counter}</p>
//     </div>
//   );
// }
// // 将 store 数据制作成组件的 props 返回的对象就是 props
// const mapStateToProps = (state) => ({
//   counter: state.counter
// })
// export default connect(mapStateToProps)(App);
