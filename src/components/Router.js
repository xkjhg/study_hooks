import React from "react"
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import Use_Effect from "../routes/Use_Effect"
import Use_Input from "../routes/Use_Input"
import Use_State from "../routes/Use_State"
import Use_Tabs from "../routes/Use_Tabs"
import Use_Title from "../routes/Use_Title"
import Use_Click from "../routes/Use_Click"
import Navigation from "./Navigation"

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
        </div>
      </Switch>
    </Router>
  )
}

export default AppRouter
