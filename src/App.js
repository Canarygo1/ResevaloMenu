import React from "react";
import { createBrowserHistory } from "history";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LenguageSelection from "./pages/lenguage_selection";
import Ervaza from "./pages/ervaza";
const history = createBrowserHistory();


function App() {
    return (
      <Router history={history}>
        <Switch>
            <Route exact path='/cartas/:id(ervaza)' component={LenguageSelection} />
            <Route exact path='/cartas/:id(ervaza)/:codeDefault' component={Ervaza} />
        </Switch>
      </Router>
    );
}
export default App;
