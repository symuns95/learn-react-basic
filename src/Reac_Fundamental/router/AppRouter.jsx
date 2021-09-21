import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { About } from "./pages/about/about";
import Home from "./pages/home/home";
import Greet from "./pages/greet/greet";
import AllPart from "./pages/allPart";
function App() {
    // lets learn React Router Dom
    return (
        <Router>
            {/* if I not use Switch then all componet will show like if path is /about and exact is not for /  then home and about componet will showed at a time // the benifit of switch the router render the first metched path  */}
            <Switch>
                {/* Use exact for go to exact path */}
                <Route exact path={"/"} component={Home} />
                <Route path={"/about"} component={About} />
                {/* / here /greet:anything to render greet component if i use /greet/ in with exact then i can able to to get the text of after second / text with hook */}
                <Route exact path={"/greet/:name"} component={Greet} />
                <Route path={"/parts"} component={AllPart} />
            </Switch>
        </Router>
    );
}

export default App;
