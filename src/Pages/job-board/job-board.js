import React, { Component } from 'react';
import axios from 'axios';
// import { createStore } from 'redux';

import JobListings from "../../Components/job-listings/job-listings";
import JobDetail from "../../Components/job-detail/job-detail";

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
            jobDetail: null
        };

        this.getJobs = this.getJobs.bind(this);
        this.getJobDetail = this.getJobDetail.bind(this);
        this.clearJobDetail = this.clearJobDetail.bind(this);
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

    getJobDetail(job) {
        const jobId = job.id;

        axios
        .get(`https://api.greenhouse.io/v1/boards/dept/jobs/${jobId}`)
        .then(res => {
            console.log(res.data);

            this.setState({
                jobDetail: res.data
            });
        });
    }

    clearJobDetail() {
        this.setState({
            jobDetail: null
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

                    {
                    this.state.jobDetail ? 
                        <JobDetail
                            JobDetail={this.state.jobDetail}
                            clearJobDetail={this.clearJobDetail}
                        />
                    :
                        <JobListings
                            JobData={this.state.jobData}
                            getJobDetail={this.getJobDetail}
                        />
                    }
                    
                </div>
            </section>
        );
    }
}

export default JobBoard;

