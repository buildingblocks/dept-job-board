import React from "react";
import axios from "axios";

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
            console.log(jobs);

            this.setState({ jobList: jobs });
        })
    }

    componentDidMount() {
        this.getJobInfo();
    }

    render () {
        return (
            <div>
                <h1>Job board</h1>
            </div>
        )
    }
}

module.exports = JobBoard;