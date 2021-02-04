import { Switch, Route } from 'react-router-dom'

import About from '../pages/About'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
import Faq from '../pages/Faq'
import Home from '../pages/Home'
import Lesson from '../pages/Lesson'
import Plan from '../pages/Plan'
import Studio from '../pages/Studio'

function PageContainer() {
  return (
    <Switch>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/lesson'>
        <Lesson />
      </Route>
      <Route path='/plan'>
        <Plan />
      </Route>
      <Route path='/studio'>
        <Studio />
      </Route>
      <Route path='/faq'>
        <Faq />
      </Route>
      <Route path='/contact'>
        <Contact />
      </Route>
      <Route path='/blog'>
        <Blog />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  )
}

export default PageContainer
