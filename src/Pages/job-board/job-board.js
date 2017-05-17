import React from "react";
import axios from "axios";

import JobList from "../../Components/JobList";
import JobListFilters from "../../Components/JobListFilters";

import '../job-board/job-board.css';

class JobBoard extends React.Component {

    constructor (props) {
        super (props);
        
        this.state = { jobList: [] };

        this.getJobInfo = this.getJobInfo.bind(this);
    }

    getJobInfo () {
        axios.get('https://api.greenhouse.io/v1/boards/dept/jobs/')
        .then(res => {
            var jobs = res.data.jobs;

            this.setState({ jobList: jobs });

            console.log(this.state.jobList);
        })
    }

    componentDidMount() {
        this.getJobInfo();
    }

    render () {
        return (
            <div class="jobList">
                <h1>Job board</h1>
                <div className="jobList-container">
                    <JobList data={this.state.jobList} />
                </div>
                <div className="jobList-select">
                    <h2>Job Filters</h2>
                    <JobListFilters data={this.state.jobList} />
                </div>
            </div>
        )
    }
}

module.exports = JobBoard;