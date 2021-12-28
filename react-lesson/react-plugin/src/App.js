
import './App.less';
import EchartsDemo from './components/EchartsDemo';
import HookDemo1 from './components/Hook/HookDemo1';
import StyledComponentsDemo from './components/StyledComponentsDemo';
import SwiperDemo from './components/SwiperDemo';
import { useState } from 'react'
import HookDemo2 from './components/Hook/HookDemo2';
import HookDemo3 from './components/Hook/HookDemo3';
import HookDemo4 from './components/Hook/HookDemo4';
import HookDemo5 from './components/Hook/HookDemo5';
import HookDemo55 from './components/Hook/HookDemo55';

function App() {
  const [show, setShow] = useState(true)
  return (
    <div className="App">
      <h2>react plugin <span>abc</span></h2>
      <div className="box"></div>
      <hr />
      <StyledComponentsDemo />
      <hr />
      <SwiperDemo />
      <hr />
      <EchartsDemo />
      <hr />
      <button onClick={() => setShow(false)}>消失</button>
      { show && <HookDemo1 />}
      <hr />
      <HookDemo2 />
      <hr />
      <HookDemo3 />
      <hr />
      <HookDemo4 />
      <hr />
      <HookDemo5 />
      <hr />
      <HookDemo55 />
      
    </div>
  );
}

export default App;


