import React, { Component } from 'react';
import axios from 'axios';
// import { createStore } from 'redux';

import JobListings from "../../Components/job-listings/job-listings";


// The Reducer Function
// var userReducer = function(state, action) {
//   if (state === undefined) {
//     state = [];
//   }
//   if (action.type === 'ADD_USER') {
//     state.push(action.user);
//   }
//   return state;
// }

// Create a store by passing in the reducer
// var store = Redux.createStore(userReducer);

class JobBoard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            jobData: [],
        };

        this.getJobs = this.getJobs.bind(this);
    }

    getJobs() {

        axios
        .get(`https://api.greenhouse.io/v1/boards/dept/jobs/`)
        .then(res => {
            const data = res.data.jobs;
            console.log(data);

            this.setState({
                jobData: data
            });
        })
        .catch((error) => {
            console.log(error);
        });   
    }

    componentDidMount() {
        this.getJobs();
    }
    
    render() {
        let jobLength = this.state.jobData ? this.state.jobData.length : null;
        let plural = jobLength > 1 ? true : false;
        let resultText = plural ? 'results found' : 'result found';

        return (
            <section className="job-board">
                <header className="job-board__header">
                    <h2 className="job-board__title">
                        Job Board
                    </h2>
                    {
                        jobLength ?
                            <p className="results__amount">
                                {
                                    `${this.state.jobData.length} ${resultText}`
                                }
                            </p>
                        : null
                    }
                </header>
                <div className="job-board__body">

                    <JobListings
                        JobData={this.state.jobData}
                    />
                    
                </div>
            </section>
        );
    }
}

export default JobBoard;

