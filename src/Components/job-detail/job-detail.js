import React, { Component } from 'react';

class JobDetail extends Component {

    render() {
        const JobDetail = this.props.JobDetail;

        return (
            <div>
                <button className="btn btn--style-a back-btn" onClick={this.props.clearJobDetail}>Back</button>
                <div onClick={this.props.clearJobDetail}>
                    <h3><a href={JobDetail.absolute_url} target="_blank">{JobDetail.title}</a></h3>
                    {JobDetail.location.name ? <p>Location: {JobDetail.location.name}</p> : null}
                    {JobDetail.departments[0].name ? <p>Department: {JobDetail.departments[0].name}</p> : null}
                    {JobDetail.offices[0].name ? <p><strong>{JobDetail.offices[0].name}</strong></p> : null}

                </div>
            </div>
        );
    }
}

JobDetail.propTypes = {
    JobDetail: React.PropTypes.object.isRequired,
    clearJobDetail: React.PropTypes.func.isRequired
}

export default JobDetail;