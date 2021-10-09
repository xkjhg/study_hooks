import React from "react"

const useConfirm = (message = "", onConfirm, onCancel) => {
  if (onConfirm && typeof onConfirm !== "function") {
    return
  }
  if (onCancel && typeof onCancel !== "function") {
    return
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm()
    } else {
      onCancel()
    }
  }
  return confirmAction
}

const Use_Confirm = () => {
  const deleteWorld = () => {
    console.log("Deleting the world...")
  }
  const abort = () => {
    console.log("Aborted")
  }
  const confirmDelete = useConfirm("Are you Sure", deleteWorld, abort)
  return (
    <div className="App">
      <h2>Look Console - yes or no</h2>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  )
}

export default Use_Confirm
