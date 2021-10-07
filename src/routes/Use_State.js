import React, { useState } from "react"

const Use_State = () => {
  const [item, setItem] = useState(1)
  const incrementItem = () => setItem(item + 1)
  const decrementItem = () => setItem(item - 1)
  return (
    <div className="App">
      <h2>
        {item}
      </h2>
      <button onClick={incrementItem}> + </button>
      <button onClick={decrementItem}> - </button>
    </div>
  )
}

export default Use_State
