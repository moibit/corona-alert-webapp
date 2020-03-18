import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import EntryPoint from './components/Entry.js';
import Home from './components/home';
import Profile from './components/profile';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

class Application extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" render={() => (
                        <Redirect to="/login" />
                    )} />
                    <Route exact path="/signup" render={() => (
                        <EntryPoint case={1} />
                    )} />

                    <Route exact path="/login" render={() => (
                        <EntryPoint case={2} />
                    )} />

                    <Route exact path="/home" component={Home} />  
                    <Route exact path="/profile" component={Profile} />   
                </Switch>

            </HashRouter>
        );
    }
}
ReactDOM.render(<Application />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
