import React, { Component } from 'react';

class JobListings extends Component {

    render() {
        return (
            <div>
                {
                this.props.JobData.map(function(job) {
                const created = job.updated_at.substring(0, job.updated_at.indexOf('T'));
                const clickEvent = this.props.getJobDetail.bind(this, job);
                    
                    return(
                        <div className="job-listing" key={job.id} onClick={clickEvent}>
                            <h3 className="job-listing__title">{job.title}</h3>
                            <div className="job-listing__body">
                                <p>Last updated: {created}</p>
                                {job.location.name ? <p>Job is in: {job.location.name}</p> : null}
                            </div>
                        </div>
                    );
                }, this)
                }
            </div>
        );
    }
}


JobListings.propTypes = {
    JobData: React.PropTypes.array.isRequired,
    getJobDetail: React.PropTypes.func.isRequired
}

export default JobListings;