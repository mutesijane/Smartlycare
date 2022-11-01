import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";





function App() {
  return (
    <Switch>
          <Route path="/">
            <Home />
          </Route>
         
          
    </Switch>
  );
}

export default App;
