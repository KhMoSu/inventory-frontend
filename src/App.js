import './App.css';
import Item from './Item';
import { Router, Route, Switch } from 'react-router-dom';

export default function App() {
  

  return (
    <Router> 
      <div className="App">
        <Switch> 
          <Route exact path="/">
            {/* <AuthPage /> */}
          </Route>
          <Route exact path="/items">
            <Item />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
