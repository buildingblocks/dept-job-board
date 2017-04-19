import React, { Component } from 'react';
import axios from 'axios';

import JobFeed from "../../Components/job-feed/job-feed";

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
        return (
            <div>
                <div>Job Board</div>
                <JobFeed
                    JobData={this.state.jobData}
                />
            </div>
        );
    }
}

export default JobBoard;