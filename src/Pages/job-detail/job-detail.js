import React, { Component } from 'react';
import axios from 'axios';

import JobDetail from "../../Components/job-detail/job-detail";


class JobDetailPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            jobDetail: {}
        };

        this.getJobDetail = this.getJobDetail.bind(this);
    }

    getJobDetail(jobId) {
        console.log('jobID: ' + jobId);
        // const jobId = job.id;

        axios
        .get(`https://api.greenhouse.io/v1/boards/dept/jobs/${jobId}`)
        .then(res => {
            console.log(res.data);

            this.setState({
                jobDetail: res.data
            });
        });
    }

    componentDidMount() {
        const jobId = this.props.match.params.jobId;
        this.getJobDetail(jobId);
    }


    render() {

        return (
            <section className="job-board">
                <header className="job-board__header">
                    <h2 className="job-board__title">
                        Job Information
                    </h2>
                </header>
                <div className="job-board__body">
                    {
                        this.state.jobDetail ?
                            <JobDetail
                                jobDetail={this.state.jobDetail}
                            />
                        : null
                    }
                </div>
            </section>
        );
    }
}

export default JobDetailPage;

