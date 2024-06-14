import "./App.css";
import NavBar from "./NavBar";
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import History from "./history";
import Footer from "./Footer";
import Error from "./Error";
import Initiative from "./Intiatives";
function App() {
  return (
    
  <div>
    <Router>
      <NavBar />
      <div className="content">
          <Switch>
          <Route exact path = "/">
          <div className="home">
              <Home/>
              </div>
            </Route>

            <Route exact path = "/about">
            <div className="Aboutcont">
              <About/>
              </div>
              <Footer/>
            </Route>
            
            <Route exact path = "/history">
              <History/>
              <Footer/>
            </Route>

            <Route exact path = "/initiative">
              <Initiative/>
              <Footer/>
            </Route>

            <Route path = "*">
              <Error/> 
            </Route>
          </Switch>  
        </div>
        {/* <Footer/> */}
    </Router>
  </div>
  );
}

export default App;