import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class JobDetail extends Component {

    render() {
        const JobDetail = this.props.jobDetail;

        return (
            <div>
                <Link className="btn btn--style-a back-btn" to={'/'}>Back To Jobs</Link>
                <div>
                    <h3><a href={JobDetail.absolute_url} target="_blank">{JobDetail.title}</a></h3>
                    {JobDetail.location && JobDetail.location.name ? <p>Location: {JobDetail.location.name}</p> : null}
                    {JobDetail.departments && JobDetail.departments.length ? <p>Department: {JobDetail.departments[0].name}</p> : null}
                    {JobDetail.offices && JobDetail.offices.length ? <p><strong>{JobDetail.offices[0].name}</strong></p> : null}

                </div>
            </div>
        );
    }
}

JobDetail.propTypes = {
    jobDetail: React.PropTypes.object
}


export default JobDetail;