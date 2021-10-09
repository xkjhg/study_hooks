import React from "react"

const usePreventLeave = () => {
  const listener = event => {
    event.preventDefault()
    event.returnValue = ""
  }
  const enablePrevent = () => {
    window.addEventListener("beforeunload", listener)
  }
  const disablePrevent = () => {
    window.removeEventListener("beforeunload", listener)
  }
  return { enablePrevent, disablePrevent }
}

const Use_PreventLeave = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave()
  return (
    <div className="App">
      <h2>'Protect' Click and protect your save data</h2>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  )
}

export default Use_PreventLeave
