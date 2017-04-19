import React, { Component } from 'react';

class JobFeed extends Component {

    render() {
        return (
            <div>
            	<ul>
                {
                this.props.JobData.map(function(job) {
                    
                    return(
                        <li key={job.id}><a href={job.id}>{job.title}</a></li>
                    );
                }, this)
                }
                </ul>
            </div>
        );
    }
}


JobFeed.propTypes = {
    JobData: React.PropTypes.array.isRequired
}

export default JobFeed;