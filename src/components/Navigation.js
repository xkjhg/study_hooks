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
      <Link to="/Use_Confirm">useConfirm</Link>
      <Link to="/Use_PreventLeave">usePreventLeave</Link>
      <Link to="/Use_BeforeLeave">useBeforeLeave</Link>
      <Link to="/Use_FadeIn">useFadeIn</Link>
      <Link to="/Use_Network">useNetwork</Link>
    </nav>
  )
}

export default Navigation
