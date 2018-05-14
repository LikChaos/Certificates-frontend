import * as React from "react";
import {Link, Route} from 'react-router-dom'
import "./styles/app.css";

import Home from './containers/Home'
import Detail from './containers/Detail'
import {Switch} from "react-router";

export default class App extends React.Component {
    render() {
        return (
            <div>
                {/*<header>*/}
                {/*<Link to="/">Home</Link>*/}
                {/*<Link to="/2">About</Link>*/}
                {/*</header>*/}
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/:id" component={Detail}/>
                </Switch>
            </div>
        );
    }
}
