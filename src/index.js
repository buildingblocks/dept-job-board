import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import JobBoard from "./Pages/job-board/job-board";

import './styles/styles.css';

const Root = () => {
    return(
        
        <div id="page" class="page">
            <main className="main" id="main">
                <header class="header" id="header" role="banner" itemscope itemtype="http://schema.org/WPHeader">
                    <h1 className="visually-hidden" itemscope itemtype="http://schema.org/WPHeader">Github Repos Search</h1>
                </header>
                <div className="layout">
                    <div className="region region--a">
                        <div className="region-inner">
                            <Router>
                                <Switch>
                                    <Route exact path="/" component={JobBoard} />
                                    <Route path="/job-board/" component={JobBoard} />
                                    <Route component={JobBoard} />
                                </Switch>
                            </Router>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
