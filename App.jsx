import './index.css'
import { BlogDetails } from './BlogDetails';
import { Create } from './Create';
import { Home } from './Home'
import { Navbar } from './NavBar';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { NotFound } from './NotFound';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/create">
            <Create/>
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails/>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  )
}



export default App
