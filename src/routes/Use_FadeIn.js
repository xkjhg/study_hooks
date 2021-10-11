import React, { useEffect, useRef } from "react"

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef()
  useEffect(() => {
    if (element.current) {
      const { current } = element
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`
      current.style.opacity = 1
    }
  }, [])
  if (typeof duration !== "number" || typeof delay !== "number") {
    return
  }
  return { ref: element, style: { opacity: 0 } }
}

const Use_FadeIn = () => {
  const fadeInH1 = useFadeIn(1, 2)
  const fadeInP = useFadeIn(3, 7)
  return (
    <div className="App">
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>Welcome Fade in World</p>
    </div>
  )
}

export default Use_FadeIn
