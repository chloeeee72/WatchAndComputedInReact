// React Function Component 实现 Vue 的 watch(数据监听)

import React, { useState, useEffect, useRef } from 'react'

type Callback<T> = (prev: T | undefined) => void;

type Config = {
  immediate: boolean;
};

function useWatch<T>(dep: T, callback: Callback<T>, config: Config = { immediate: false }) {
  const { immediate } = config;

  const prev = useRef<T>();
  const inited = useRef(false);
  const stop = useRef(false);

  useEffect(() => {
    const execute = () => callback(prev.current);

    if (!stop.current) {
      if (!inited.current) {
        inited.current = true;
        if (immediate) {
          execute();
        }
      } else {
        execute();
      }
      prev.current = dep;
    }
  }, [dep]);

  return () => {
    stop.current = true;
  };
}

const App: React.FC = () => {
  const [prev, setPrev] = useState()
  const [count, setCount] = useState(0);

  const stop = useWatch(count, (prevCount) => {
    console.log('prevCount: ', prevCount);
    console.log('currentCount: ', count);
    setPrev(prevCount)
  })

  const add = () => setCount(prevCount => prevCount + 1)

  return (
    <div>
      <p> 当前的count是{count}</p>
      <p> 前一次的count是{prev}</p>
      {count}
      <button onClick={add} className="btn">+</button>
      <button onClick={stop} className="btn">停止观察旧值</button>
    </div>
  )
}

export default App;