import React, { useEffect } from "react"

const useBeforeLeave = onBefore => {
  useEffect(() => {
    document.addEventListener("mouseleave", handle)
    return () => document.removeEventListener("mouseleave", handle)
  }, [])
  if (typeof onBefore !== "function") {
    return
  }
  const handle = event => {
    const { clientY } = event
    if (clientY <= 0) {
      onBefore()
    }
  }
}

const Use_BeforeLeave = () => {
  const begForLife = () => console.log("Pls don't leave...")
  useBeforeLeave(begForLife)
  return (
    <div className="App">
      <h1>Mouse cursor UP! and Look console!</h1>
    </div>
  )
}

export default Use_BeforeLeave
