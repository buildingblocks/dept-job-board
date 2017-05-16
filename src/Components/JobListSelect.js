import React from "react";

class JobListSelect extends React.Component {
    render () {
        return (
            <select>
                {
                    this.props.data.map((location, index) => (
                        <option key={location.location.name.toString()} value={location.location.name}>{location.location.name}</option>
                    ))
                }
            </select>
        )
    }
}

export default JobListSelect;