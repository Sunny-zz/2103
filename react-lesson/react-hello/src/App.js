import './App.css'
import Parent from './components/ContextDemo/Parent';
import PortalsDemo from './components/PortalsDemo';
import PropTypesDemo from './components/PropTypesDemo';
import Cat from './components/RenderPropDemo/Cat';
import Mouse from './components/RenderPropDemo/Mouse';
function App() {
  return (
    <div className="App">
      <h2>hello</h2>
      <PropTypesDemo imgSrc='https://dss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1989601859.jpg' description='测试测试测试' />
      <hr />
      <PortalsDemo />
      <hr />
      {/* point 得到的就是鼠标坐标 */}
      {/* render 就是徐然 prop 告诉 Mouse 组件需要渲染什么内容，并且利用子组件内的 state  */}
      {/* <Mouse render={point => <Cat {...point} /> } /> */}
      <hr />
      <Parent />
    </div>
  );
}

export default App;

