import React from "react";

class JobListFilters extends React.Component {

    constructor (props) {
        super (props);

        this.state = { jobFilters: [] };
        
        this.returnLocation = this.returnLocation.bind(this);
    }

    // Move JSX out of there and into bottom render
    // This should only be JS
    returnLocation () {
        return (
            this.props.data.map((location, index) => (
                <option key={location.location.name.toString()} value={location.location.name}>{location.location.name}</option>
            ))
        )
    }

    // Use this to filter results to unique values
    // this.props.data.filter((location, index, inputArray) => (
    //     return inputArray.indexOf(location.location.name) == location.location.name;
    // ))

    render () {
        return (
            <select>
                <option value="Location"> Location</option>
                {this.returnLocation()}
            </select>
        )
    }
}

export default JobListFilters;