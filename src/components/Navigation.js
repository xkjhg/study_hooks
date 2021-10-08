import React from "react"
import { Link } from "react-router-dom"
import "./Navigation.css"

const Navigation = () => {
  return (
    <nav className="nav">
      <Link to="/Use_State">useState</Link>
      <Link to="/Use_Input">useInput</Link>
      <Link to="/Use_Tabs">useTabs</Link>
      <Link to="/Use_Effect">useEffect</Link>
      <Link to="/Use_Title">useTitle</Link>
      <Link to="/Use_Click">useClick</Link>
    </nav>
  )
}

export default Navigation
