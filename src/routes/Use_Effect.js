import React, { useEffect, useState } from "react"

const Use_Effect = () => {
  const sayHello = () => {
    console.log("Hello")
  }
  const [number, setNumber] = useState(0)
  const [aNumber, setAnumber] = useState(0)
  useEffect(
    () => {
      sayHello()
    },
    [number]
  )
  return (
    <div className="App">
      <h2>Hello console go~</h2>
      <h3>number? Hello yes. aNumber? Hello No.</h3>
      <button onClick={() => setNumber(number + 1)}>
        {number}
      </button>
      <button onClick={() => setAnumber(aNumber + 1)}>
        {aNumber}
      </button>
    </div>
  )
}

export default Use_Effect
