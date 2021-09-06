import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./screens/SignUp"

function App() {
  return (
    <>
    <Router >
      <Switch>
        <Route exact path="/" component={SignUp}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
