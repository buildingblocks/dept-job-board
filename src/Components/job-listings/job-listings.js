import React, { Component } from 'react';

class JobListings extends Component {

    render() {
        return (
            <div>
                {
                this.props.JobData.map(function(job) {
                    
                    return(
                        <div key={job.id}>
                            <a href={job.absolute_url} target="_blank">{job.absolute_url}</a>
                        </div>
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