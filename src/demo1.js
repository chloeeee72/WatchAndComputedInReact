//React Function Component 实现 Vue 的 computed(计算属性)

import React, { useMemo, useState } from 'react'

export default function Demo1 () {
  const [count, setCount] = useState(0)

  const double = useMemo(() => {
    console.log('double')
    return count * 2
  }, [count])

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        点击+1
      </button>
      <div>Count is :{count}</div>
      <div>Double is :{double}</div>
    </div>
  )
}