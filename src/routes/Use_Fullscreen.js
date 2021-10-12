import React, { useRef } from "react"

const useFullscreen = () => {
  const element = useRef()
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen()
    }
  }
  const exitFull = () => {
    document.exitFullscreen()
  }
  return { element, triggerFull, exitFull }
}

const Use_Fullscreen = () => {
  const { element, triggerFull, exitFull } = useFullscreen()
  return (
    <div className="App">
      <div ref={element}>
        <img src="./img/apple.jpg" />
        <button onClick={exitFull}>Exit Fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make Fullscreen</button>
    </div>
  )
}

export default Use_Fullscreen
