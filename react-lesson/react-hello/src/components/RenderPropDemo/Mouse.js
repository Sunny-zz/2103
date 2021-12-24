import { Component } from 'react'
class Mouse extends Component {
  state = {
    x: 0,
    y: 0
  }

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    // render  prop  作用是让父组件决定我这个组件需要渲染什么内容
    const {render} = this.props
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
       {render(this.state)}
      </div>
    );
  }
}

export default Mouse