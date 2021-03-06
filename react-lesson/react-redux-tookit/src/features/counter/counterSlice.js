import {  createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';
// import produce from 'immer';

// 初始的 counter 数据
const initialState = {
  value: 0,
  // 状态有两种 loading  idle
  status: 'idle',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

// 异步的 thunk  需要使用 createAsyncThunk 创建
// createAsyncThunk 
// 第一个参数是 action type
// 第二个参数是函数返回值是 action  payload
// 在组件中使用 dispatch(incrementAsync(amount))  来发 action 从而修改 state counter


// counter reducer
// createSlice 用来创建 counter reducer
// 参数是一个对象 
// 对象下的属性
// name 命名空间
// initialState 数据初始值
// reducers 动作处理 reducer 函数 写法可以对比之前的 switch 判断， 写成对象
// 该对象的属性名就是 action type，当使用 dispatch 发对应的 type 的时候会自动触发
export const counterSlice = createSlice({
  name: 'counter',  // 命名空间
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // 使用了 createSlice 之后，向之前的修改 state 的行为，可以直接写成一个方法，该方法接收 state 作为参数函数内直接修改 state 即可。内部利用了 immer 库对 state 进行的修改，遵循 不可变性
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // tookit 内内置了immer库，immer 的作用是可以直接对 state 进行修改
      // 事实上 immer 利用的是 es6 的 proxy 来处理的，遵循 redux 不可变性
      // 内置了 immer 库之后，我们修改 state 可以直接修改了 
      state.counter += 1
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action) => {
      // 在组件中调用incrementByAmount的时候直接传递的参数会被 action 的 payload 属性接收
      state.value += action.payload;
    },
    fetchCountAction: (state, action) => {
      state.value += action.payload
    }
  },
  //#region 
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(incrementAsync.pending, (state) => {
  //       state.status = 'loading';
  //     })
  //     .addCase(incrementAsync.fulfilled, (state, action) => {
  //       state.status = 'idle';
  //       state.value += action.payload;
  //     });
  // },
  //#endregion
});
// 从创建好的切片中导出 action 创建函数
export const { increment, decrement, incrementByAmount, fetchCountAction } = counterSlice.actions;

// 异步获取数据
export const incrementAsync = (amount) => async (diapatch) => {
  const response = await fetchCount(amount);
  diapatch(fetchCountAction(response.data))
}
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

// 定义了一个获取 state 数据的方法
export const selectCount = (state) => state.counter.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

// 就是一个 异步 action 创建函数  默认直接支持异步，因为内置了 thunk
export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};


// const state = {
//   a: {
//     x: 'hello',
//     num: {
//       value: 100,
//       state: 'xx'
//     }
//   },
//   b: {
//     num: 200
//   }
// }

// // state.a.num = 200
// // 其实意思就是简化了 ... 的写法  内部使用的是 proxy 知识
// const newState = produce(state, (draft) => {
//   // draft 就是一个 state 的草稿 
//   draft.a.num.value = 200
// })

// console.log(newState.b === state.b)

// 导出的时候要导出 counterSlice.reducer  因为合并的时候合并的是 reducer
export default counterSlice.reducer;



// 一个拆分出来的 reducer
// 1. 先使用  createSlice 创建切片(命名    state 的初始值   reducer   action 创建函数 )
// 2. 从创建好的 切片中 导出 action 创建函数 和 reducer 提供给其他人使用  
// 导出的 action 创建函数可以在组件中直接使用 dispatch 触发  ，导出的 reducer 给 configureStore 创建 store