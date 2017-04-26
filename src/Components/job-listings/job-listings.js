import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class JobListings extends Component {

    render() {
        return (
            <div>
                {
                this.props.JobData.map(function(job) {
                const created = job.updated_at.substring(0, job.updated_at.indexOf('T'));
                    
                    return(
                        <Link to={`/job-detail/${job.id}`} key={job.id}>
                            <div className="job-listing">
                                <h3 className="job-listing__title">{job.title}</h3>
                                <div className="job-listing__body">
                                    <p>Last updated: {created}</p>
                                    {job.location.name ? <p>Job is in: {job.location.name}</p> : null}
                                </div>
                            </div>
                        </Link>
                    );
                }, this)
                }
            </div>
        );
    }
}


JobListings.propTypes = {
    JobData: React.PropTypes.array.isRequired
}

export default JobListings;