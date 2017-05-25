import React from "react";
import PropTypes from 'prop-types';

class JobListFilters extends React.Component {

    constructor (props) {
        super (props);
        
        this.state = ({
            value: ''
         });

         this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleSelectChange (event){
        var option = event.target.value;
        var inputName = event.target.className;
        this.setState({value: event.target.value});
        this.props.handleChange(option, inputName);
     }

    render () {
        return (
            <div>
                <select className={this.props.className} onChange={this.handleSelectChange}>
                    <option value={this.props.name}>{this.props.name}</option>
                        {
                            this.props.data.map((jobFilter, index) => (

                            <option key={index} value={jobFilter}>{jobFilter}</option>
                            
                        ))
                        }
                </select>
            </div>
        )
    }
}

JobListFilters.propTypes = {
    handleChange: PropTypes.func.isRequired
}

export default JobListFilters;