import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";
import Jumbo from "./components/Jumbo";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        {/* Nav Here */}
        <Nav />
        {/* Banner/ Jumbo */}
        <Jumbo />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/saved">
            <Saved />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
