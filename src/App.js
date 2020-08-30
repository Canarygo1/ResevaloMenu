import React from "react";
import { createBrowserHistory } from "history";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LenguageSelection from "./pages/lenguage_selection";
import stories from "./pages/stories-screen";
import index from "./pages/index";
import Index from "./pages/business";

const history = createBrowserHistory();

function App() {

    return (
        <div>
          <Router history={history}>
            <Switch>
                <Route exact path='/cartas/:id' component={LenguageSelection} />
                <Route exact path='/cartas/:id/:codeDefault' component={Index} />
                <Route exact path='/cartas/:id/:codeDefault/stories' component={stories} />
                <Route exact path='/' component={index} />
            </Switch>
          </Router>
        </div>
    );
}

export default App;
