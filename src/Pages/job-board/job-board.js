import React from "react";
import axios from "axios";

import JobList from "../../Components/JobList";
import JobListFilters from "../../Components/JobListFilters";

import '../job-board/job-board.css';

class JobBoard extends React.Component {

    constructor (props) {
        super (props);
        
        this.state = ({
            jobList: [],
            jobLocation: [],
            jobName: [],
            value: ""
         });

        this.getJobInfo = this.getJobInfo.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    getJobInfo () {
        axios.get('https://api.greenhouse.io/v1/boards/dept/jobs/')
        .then(res => {
            var jobs = res.data.jobs;

            this.setState({jobList: jobs});


            // Put this filter into a function and pass in filter param
            // Filter job locaitons
            var filterLocations = jobs.map(function(locations) {
                return locations.location.name;
            });
            var filterUniqueLocations = filterLocations.filter(function(locations, index) {
                return filterLocations.indexOf(locations) === index;
            })
            this.setState({jobLocation: filterUniqueLocations});

            // Filter job titles
            var filterNames = jobs.map(function(names) {
                return names.title;
            });
            var filterUniqueNames = filterNames.filter(function(title, index) {
                return filterNames.indexOf(title) === index;
            })
            this.setState({jobName: filterUniqueNames});

            console.log(this.state.jobList);
        })
    }

    handleChange (newOption){
        console.log("changed");
        // this.setState({value: newOption});
        // console.log(this.state.value);
     }

    // This function needs both the jobs variable and the fitler value
    // listFilter (filterValue, jobs) {
    //         var filterItem = jobs.map(function(filter) {
    //             return filter.filterValue;
    //         });
    //         var filterUniqueItems = filterItem.filter(function(filter, index) {
    //             return filterItem.indexOf(filter) === index;
    //         })
    // }

    componentDidMount() {
        this.getJobInfo();
    }

    render () {
        return (
            <div className="jobList">
                <h1>Job board</h1>
                <div className="jobList-container">
                    <JobList data={this.state.jobList} />
                </div>
                <div className="jobList-select">
                    <h2>Job Filters</h2>
                    <JobListFilters className="locationList" name="Location" data={this.state.jobLocation} handleChange={this.handleChange} />
                    <JobListFilters className="titleList" name="Name" data={this.state.jobName} handleChange={this.handleChange} />
                </div>
            </div>
        )
    }
}

module.exports = JobBoard;