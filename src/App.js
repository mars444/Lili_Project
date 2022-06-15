import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import TeamPage from "./pages/TeamPage";
import PricesPage from "./pages/PricesPage";
import ReviewsPage from "./pages/ReviewsPage";
import AboutPage from "./pages/AboutPage";
const App = () => {
    const appRoutes = [
        {
            path: '/',
            Component: HomePage,
            exact: true,
        },
        {
            path: "/about",
            Component: AboutPage,
            exact: true
        },
        {
            path: "/reviews",
            Component: ReviewsPage,
        },
        {
            path: "/prices",
            Component: PricesPage,
        },
        {
            path: "/team",
            Component: TeamPage,
        },

    ];
    return (

        <Router>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/reviews">reviews</Link>
                </li>
                <li>
                    <Link to="/prices">prices</Link>
                </li>
                <li>
                    <Link to="/team">team</Link>
                </li>
            </ul>
            <hr />
            <Switch>
                {appRoutes.map(({path, Component, exact},index) => {

                    return <Route key={index}  path={path} exact={exact} component={Component}/>
                })}
            </Switch>
        </Router>

    );
};

export default App;