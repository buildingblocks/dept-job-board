import React from "react";
import axios from "axios";

import JobList from "../../Components/JobList";

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
            <div>
                <h1>Job board</h1>
                <JobList data={this.state.jobList} />
            </div>
        )
    }
}

module.exports = JobBoard;