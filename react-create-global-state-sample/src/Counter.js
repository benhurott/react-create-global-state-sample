import React from 'react'
import useGlobalCounter from './useGlobalCounter'

export default function Counter(props) {
  const [state, setState] = useGlobalCounter()

  return (
    <div>
      <p>State: {state}</p>
      <button onClick={() => setState(state + 1)}>+1</button>
      <button onClick={() => setState(state - 1)}>-1</button>
    </div>
  )
}