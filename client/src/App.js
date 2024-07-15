import React from 'react';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
import LandingPage from "./components/LandingPage";
import Home from './components/Home';
import DogCreate from './components/DogCreate'
import DogDetail from './components/DogDetail';
import About from './components/About';
import { Switch } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component = {LandingPage}/>
          <Route exact path='/home' component = {Home}/>
          <Route exact path='/dogs' component = {DogCreate}/>
          <Route exact path= '/home/:id' component = {DogDetail}/>
          <Route exact path='/about' component={About}/>
           
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
