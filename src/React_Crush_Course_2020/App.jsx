import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes";
function App() {
    // lets learn React Router Dom
    return (
        <Router>
            {/* if I not use Switch then all componet will show like if path is /about and exact is not for /  then home and about componet will showed at a time // the benifit of switch the router render the first metched path  */}
            <Switch>
                {routes.map((route, index) => {
                    return <Route exact={route.exact} path={route.path} component={route.component} key={index} />;
                })}
            </Switch>
        </Router>
    );
}

export default App;
