import React, {
  Component
} from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import Page1 from './pages/Page1.jsx';
import Page2 from './pages/Page2.jsx';


class App extends Component {

  render() {
    return ( 
      // <Home />
      <Switch>
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="*" exact component={()=> <div>No Page Found</div>} />
      </Switch>
    )
  }
}

export default App;