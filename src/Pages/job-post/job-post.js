import React, { Component } from 'react';
// import axios from 'axios';

import JobFeed from "../../Components/job-feed/job-feed";

class JobPost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            jobData: [],
        };

        this.getJob = this.getJob.bind(this);
    }

    getJob() {

        console.log(this.props);
    }

    componentDidMount() {
        this.getJob();
    }
    
    render() {
        return (
            <div>
                <h1>Job Post</h1>
            </div>
        );
    }
}

export default JobPost;