// React Class Component 实现 Vue 的 computed(计算属性)

import React, { Component } from 'react';

export default class Demo2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    };
  }
  // 计算属性
  get computedValue1 () {
    return this.state.value + 10;
  }
  // 计算属性之间相互依赖
  get computedValue2 () {
    return this.computedValue1 * 2;
  }
  // 点击 + 1
  add = () => {
    this.setState({
      value: this.state.value + 1
    })
  }
  render () {
    return (
      <div>
        <button onClick={this.add}>点击+1</button>
        <div>Value is: {this.state.value}</div>
        <div>Value + 10: {this.computedValue1}</div>
        <div>(Value + 10) * 2: {this.computedValue2}</div>
      </div>
    );
  }
}
