
import './App.less';
import EchartsDemo from './components/EchartsDemo';
import HookDemo1 from './components/Hook/HookDemo1';
import StyledComponentsDemo from './components/StyledComponentsDemo';
import SwiperDemo from './components/SwiperDemo';


function App() {
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
      <HookDemo1 />
    </div>
  );
}

export default App;
