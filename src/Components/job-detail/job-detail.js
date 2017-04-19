import React, { Component } from 'react';

class JobDetail extends Component {

    render() {
        const JobDetail = this.props.JobDetail;

        return (
            <div>
                <button className="btn btn--style-a back-btn" onClick={this.props.clearJobDetail}>Back</button>
                <div onClick={this.props.clearJobDetail}>
                    <h3>{JobDetail.title}</h3>

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