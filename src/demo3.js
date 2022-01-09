// React Class Component 实现 Vue 的 watch(数据监听)

import React, { Component } from 'react';

export default class Demo3 extends Component {
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

  /*  
  对于类组件，使用生命周期 componentDidUpdate 即可实现数据监听：
  componentDidUpdate 在首次渲染时不会执行，在组件更新时立即调用，
  可以在这时候执行setState但需要把setState放在条件语句中，否则会陷入更新无限循环。
  通过这个钩子实现对state/props/getter的监听 从而触发相应动作。
  
  依赖全局某些需要异步获取的状态时，通常有两种用途：
    直接渲染。当状态改变时会自动触发重新渲染，直接放在 componentDidMount 中即可
    根据状态的值做相应的动作，如发起接口请求，需要监听此状态，当它有值再执行相应操作

  案例：在项目初始化时，获取接口数据“用户信息”，属于异步操作，之后存储在全局状态redux中，
  某页面通过connect获取全局状态的“用户信息”，并根据该“用户信息”请求一个专属于该用户的报告列表并渲染。
  分析：“用户信息”是通过接口获取的，属于异步操作，在报告页面需要监听获取到的“用户信息”，
  当它有值时再发起“用户报告”的请求，所以不能写在 componeentDidMount 中，
  此时，需要在类组件中使用 componentDidUpdate 监听状态数据： 
  
    componentDidUpdate (prevProps, prevState){ 
      if(isEmpty(prevProps.xxx) && !isEmpty(this.props.xxx)) {
        // 发起请求
      }
    }
    
  */
  // 监听 state 变化
  componentDidUpdate () {
    if (this.state.value > 10) {
      console.log('超过10了')
    }
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
