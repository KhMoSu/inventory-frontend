import './App.css';
import List from './list';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ItemForm from './ItemForm';

export default function App() {
  return (
    <Router>
      <div className="App">
        <p>this is connected!</p>
        <Switch>
          <Route exact path="/">
            {/* <AuthPage /> */}
          </Route>
          <Route exact path="/items">
            <List />
          </Route>
          <Route exact path="/items/:id">
            <ItemForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
