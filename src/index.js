import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import JobBoard from './Pages/job-board/job-board';
import JobDetailPage from './Pages/job-detail/job-detail';

import './styles/styles.css';

const Root = () => {
    return(
        
        <div id="page" className="page">
            <main className="main" id="main">
                <header className="header" id="header" role="banner" itemScope itemType="http://schema.org/WPHeader">
                    <h1 className="visually-hidden" itemScope itemType="http://schema.org/WPHeader">Dept Job Board</h1>
                </header>
                <div className="layout">
                    <div className="region region--a">
                        <div className="region-inner">
                            <Router>
                                <Switch>
                                    <Route exact path="/" component={JobBoard} />
                                    <Route path="/job-board/" component={JobBoard} />
                                    <Route path="/job-detail/:jobId" component={JobDetailPage} />
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
