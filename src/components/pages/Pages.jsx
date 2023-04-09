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
import pagenotfoud from "../pagenotfoud"
import beanca from '../projects/bianca/beanca'
import arbianca from '../projects/bianca/arbianca'
import Arkhlood from "../projects/khlood/Arkhlood"
import Armajidi from "../projects/majedy/Armajidi"
import Araled from "../projects/alwedd/Araled"
import Projectss from "../projects/Projectss"
import Projectssar from "../projects/Projectssar"
import PrivacyPolicy from "../common/PrivacyPolicy"

const Pages = () => {

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/properties' component={Blog} />
          <Route exact path='/agents' component={Agents} />
          <Route exact path='/properties/:id' component={PropertyDetails} />
          <Route exact path='/Majidi-View' component={Majedy} />
          <Route exact path='/alwedd' component={alwedd} />
          <Route exact path='/projects' component={Projectss} />
          <Route exact path='/bianca' component={beanca} />
          <Route exact path='/khlood' component={khlood} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/ar' component={Home} />
          <Route exact path='/ar/properties' component={Blog} />
          <Route exact path='/ar/agents' component={Agents} />
          <Route exact path='/ar/contact' component={Contact} />
          <Route exact path='/ar/about' component={About} />
          <Route exact path='/ar/projects' component={Projectssar} />
          <Route exact path='/ar/bianca' component={arbianca} />
          <Route exact path='/ar/khlood' component={Arkhlood} />
          <Route exact path='/ar/alwedd' component={Araled} />
          <Route exact path='/ar/Majidi-View' component={Armajidi} />
          <Route exact path='/ar/properties/:id' component={PropertyDetails} />
          <Route exact path='/Privacy-Policy' component={PrivacyPolicy} />
          <Route path='*' component={pagenotfoud} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
