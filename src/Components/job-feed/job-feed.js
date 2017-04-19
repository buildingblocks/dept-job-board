import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class JobFeed extends Component {

    render() {
        return (
            <div>
            	<ul>
                {
                this.props.JobData.map(function(job) {
                    
                    return(
                        <li key={job.id}><Link to={`/job-post/${job.id}`}>{job.title}</Link></li>
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