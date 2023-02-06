import React,{useEffect} from "react"
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
import khlood from "../projects/khlood/Khlood"
import alwedd from "../projects/alwedd/Alwedd"
import Majedy from "../projects/majedy/Majedy"
import AOS from 'aos';
import 'aos/dist/aos.css';






const   Pages = () => {
        useEffect(() => {
        AOS.init();
      }, [])

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
          <Route exact path='/khlood' component={khlood} />
          <Route exact path='/ar/khlood' component={khlood} />
          <Route exact path='/alwedd' component={alwedd} />
          <Route exact path='/ar/alwedd' component={alwedd} />
          <Route exact path='/Majidi-View' component={Majedy} />
          <Route exact path='/ar/Majidi-View' component={Majedy} />
          <Route exact path='/:id' component={PropertyDetails} />
          <Route exact path='/ar/:id' component={PropertyDetails} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
