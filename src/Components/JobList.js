import React from "react";

class JobList extends React.Component {
    render () {
        return (
            <div>
                {
                    this.props.data.map((job, index) => (
                        <ul key={job.id.toString()}>
                            <li>{job.title}</li>
                            <li>{job.id}</li>
                            <li>{job.location.name}</li>
                        </ul>
                    ))
                }
            </div>
        )
    }
}

export default JobList;