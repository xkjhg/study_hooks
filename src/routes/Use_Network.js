import React, { useEffect, useState } from "react"

const useNetwork = onChange => {
  const [status, setStatus] = useState(navigator.onLine)
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine)
    }
    setStatus(navigator.onLine)
  }
  useEffect(() => {
    window.addEventListener("online", handleChange)
    window.addEventListener("offline", handleChange)
    const rem = () => {
      window.removeEventListener("online", handleChange)
      window.removeEventListener("offline", handleChange)
    }
    return rem
  }, [])
  return status
}

const Use_Network = () => {
  const handleNetworkChange = online => {
    console.log(online ? "Online!!!" : "Offline???")
  }
  const onLine = useNetwork(handleNetworkChange)
  return (
    <div className="App">
      <h1>
        {onLine ? "Online" : "Offline"}
      </h1>
    </div>
  )
}

export default Use_Network
