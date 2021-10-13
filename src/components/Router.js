import React from "react"
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import Use_Effect from "../routes/Use_Effect"
import Use_Input from "../routes/Use_Input"
import Use_State from "../routes/Use_State"
import Use_Tabs from "../routes/Use_Tabs"
import Use_Title from "../routes/Use_Title"
import Use_Click from "../routes/Use_Click"
import Navigation from "./Navigation"
import Use_Confirm from "../routes/Use_Confirm"
import Use_PreventLeave from "../routes/Use_PreventLeave"
import Use_BeforeLeave from "../routes/Use_BeforeLeave"
import Use_FadeIn from "../routes/Use_FadeIn"
import Use_Network from "../routes/Use_Network"
import Use_Scroll from "../routes/Use_Scroll"
import Use_Fullscreen from "../routes/Use_Fullscreen"
import Use_Notification from "../routes/Use_Notification"

const AppRouter = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <div>
          <Route exact path="/Use_State">
            <Use_State />
          </Route>
          <Route exact path="/Use_Input">
            <Use_Input />
          </Route>
          <Route exact path="/Use_Tabs">
            <Use_Tabs />
          </Route>
          <Route exact path="/Use_Effect">
            <Use_Effect />
          </Route>
          <Route exact path="/Use_Title">
            <Use_Title />
          </Route>
          <Route exact path="/Use_Click">
            <Use_Click />
          </Route>
          <Route exact path="/Use_Confirm">
            <Use_Confirm />
          </Route>
          <Route exact path="/Use_PreventLeave">
            <Use_PreventLeave />
          </Route>
          <Route exact path="/Use_BeforeLeave">
            <Use_BeforeLeave />
          </Route>
          <Route exact path="/Use_FadeIn">
            <Use_FadeIn />
          </Route>
          <Route exact path="/Use_Network">
            <Use_Network />
          </Route>
          <Route exact path="/Use_Scroll">
            <Use_Scroll />
          </Route>
          <Route exact path="/Use_Fullscreen">
            <Use_Fullscreen />
          </Route>
          <Route exact path="/Use_Notification">
            <Use_Notification />
          </Route>
        </div>
      </Switch>
    </Router>
  )
}

export default AppRouter
