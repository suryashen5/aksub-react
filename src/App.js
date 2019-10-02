import React, {
  Component
} from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import routes from './routes';

class App extends Component {

  renderRoutes = () => routes.map(route => <Route key={route.url} path={route.url} component={route.component} />);

  render() {
    return ( 
      // <Home />
      <Switch>
        {this.renderRoutes()}
      </Switch>
    )
  }
}

export default App;