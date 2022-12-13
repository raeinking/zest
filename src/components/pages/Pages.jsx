import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Projects from "../pricing/Projetctsprice"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import pageDis from "../page_dis/PageDis"
import Agents from "../agents/Agents"
import List from '../list/List'
import PropertyDetails from "../PageDis/PropertyDetails"



const   Pages = () => {

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/ar' component={Home} />
          <Route exact path='/properties' component={Blog} />
          <Route exact path='/ar/properties' component={Blog} />
          <Route exact path='/agents' component={Agents} />
          <Route exact path='/ar/agents' component={Agents} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/ar/contact' component={Contact} />
          <Route exact path='/about' component={About} />
          <Route exact path='/ar/about' component={About} />
          <Route exact path='/property/:id' component={PropertyDetails} />
          <Route exact path='/ar/property/:id' component={PropertyDetails} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
