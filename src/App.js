import {Switch, Route} from 'react-router-dom'
// Fix: Switch component should be imported from react-router-dom before using it
import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import BlogItemDetails from './components/BlogItemDetails'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <Header />
      {/* Fix: Header should be placed outside the Switch component */}
      <div className="app-body">
        <Switch>
          {/* Fix: When "/" is provided in URL path, then the Home component should be displayed */}
          <Route exact path="/" component={Home} />
          {/* Fix: About Route should consist of "/about" in URL path */}
          <Route exact path="/about" component={About} />
          {/* Fix: When "/contact" is provided in URL path, then the Contact component should be displayed */}
          <Route exact path="/contact" component={Contact} />
          {/* Fix: When mentioning path parameters for a route we need to use ":" before the variable */}
          <Route path="/blogs/:id" component={BlogItemDetails} />
          {/* Fix: NotFound component should be at last  */}
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>
)

export default App
