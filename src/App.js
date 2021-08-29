import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import About from "./components/About/About"; 
import Home from "./components/Home/Home";

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Checkout from "./components/Checkout";

function App() {
  return (
    <>
    <Router>
      <div className="app">
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/menu' component={Menu} />
        <Route path= '/about' component = {About} />
        <Route path= '/checkout' component = {Checkout} />

      </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
