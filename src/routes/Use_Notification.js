import React from "react"

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return
  }
  const fireNotifiction = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          new Notification(title, options)
        } else {
          return
        }
      })
    } else {
      new Notification(title, options)
    }
  }
  return fireNotifiction
}

const Use_Notification = () => {
  const triggerNofif = useNotification("Can I steal you kimchi?", {
    body: "I love kimchi don't you"
  })
  return (
    <div className="App">
      <button onClick={triggerNofif}>Hello Click</button>
    </div>
  )
}

export default Use_Notification
