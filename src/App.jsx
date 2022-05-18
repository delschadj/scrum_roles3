import React from 'react'
import Header_ScrumMaster from "./components_scrummaster/header/Header"
import Nav_ScrumMaster from "./components_scrummaster/nav/Nav"
import About_ScrumMaster from "./components_scrummaster/about/About"
import Roles_ScrumMaster from "./components_scrummaster/roles/Roles"
import Services_ScrumMaster from "./components_scrummaster/services/Services"
import Pitfalls_ScrumMaster from "./components_scrummaster/pitfalls/Pitfalls"
import Footer_ScrumMaster from "./components_scrummaster/footer/Footer"

import Header_productowner from "./components_productowner/header/Header"
import Nav_productowner from "./components_productowner/nav/Nav"
import About_productowner from "./components_productowner/about/About"
import Roles_productowner from "./components_productowner/roles/Roles"
import Services_productowner from "./components_productowner/services/Services"
import Pitfalls_productowner from "./components_productowner/pitfalls/Pitfalls"
import Footer_productowner from "./components_productowner/footer/Footer"

import Header_devs from "./components_devs/header/Header"
import Nav_devs from "./components_devs/nav/Nav"
import About_devs from "./components_devs/about/About"
import Roles_devs from "./components_devs/roles/Roles"
import Services_devs from "./components_devs/services/Services"
import Pitfalls_devs from "./components_devs/pitfalls/Pitfalls"
import Footer_devs from "./components_devs/footer/Footer"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

const App = () => {
  return (
          
    <Router>
      <>   
        <Switch>
            <Route path='/scrummaster'>
                <Header_ScrumMaster/>
                <Nav_ScrumMaster/>
                <About_ScrumMaster/>
                <Roles_ScrumMaster/>
                <Services_ScrumMaster/>
                <Pitfalls_ScrumMaster/>
                <Footer_ScrumMaster/>
            </Route>
        </Switch>

        <Switch>
            <Route path='/productowner'>
                <Header_productowner/>
                <Nav_productowner/>
                <About_productowner/>
                <Roles_productowner/>
                <Services_productowner/>
                <Pitfalls_productowner/>
                <Footer_productowner/>
            </Route>
        </Switch>

        <Switch>
            <Route path='/devs'>
                <Header_devs/>
                <Nav_devs/>
                <About_devs/>
                <Roles_devs/>
                <Services_devs/>
                <Pitfalls_devs/>
                <Footer_devs/>
            </Route>
        </Switch>

        
      </>
    </Router>
  )
}

export default App