import React, { useEffect, useRef } from "react"

const useClick = onClick => {
  const element = useRef()
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick)
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick)
      }
    }
  }, [])
  return element
}

const Use_Click = () => {
  const sayHello = () => console.log("Hello")
  const title = useClick(sayHello)
  return (
    <div className="App">
      <h1 ref={title}>Hello~ Click here and Look console!</h1>
    </div>
  )
}

export default Use_Click
