import React from "react"
import { Link } from "react-router-dom"
import "./Navigation.css"

const Navigation = () => {
  return (
    <nav className="nav">
      <Link to="/Use_State">useState</Link>
      <Link to="/Use_Input">useInput</Link>
      <Link to="/Use_Tabs">useTabs</Link>
    </nav>
  )
}

export default Navigation
