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
            jobListFilter: [],
            jobLocation: [],
            jobName: [],
            locationList: "Location",
            titleList: "Name",
         });

        this.getJobInfo = this.getJobInfo.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    getJobInfo () {
        axios.get('https://api.greenhouse.io/v1/boards/dept/jobs/')
        .then(res => {
            var jobs = res.data.jobs;

            this.setState({
                jobList: jobs,
                jobListFilter: jobs
            });

            console.log(this.state.jobList);

            // params in order, Array object name, array, state, if required seconday array object name
            this.selectFilter('location', jobs, 'jobLocation', 'name');
            this.selectFilter('title', jobs, 'jobName');
        })
    }

    selectFilter (filterValue, array, stateName, filterValueTwo) {

            var filterItem = "";

            if (typeof filterValueTwo === 'undefined') {
                filterItem = array.map(function(filter) {
                    return filter[filterValue];
                });
            }
            else {
                filterItem = array.map(function(filter) {
                    return filter[filterValue][filterValueTwo];
                });
            }
            var filterUniqueItems = filterItem.filter(function(filter, index) {
                return filterItem.indexOf(filter) === index;
            })
            this.setState({[stateName]: filterUniqueItems});
            
    }

    componentDidMount() {
        this.getJobInfo();
    }

    handleChange (newOption, inputName){

        this.setState({[inputName]: newOption}, function () {
            this.filterJobList();
        });
     }

     filterJobList () {
        var jobArray = this.state.jobList;
        var filteredArray = [];
        var location = this.state.locationList
        var title = this.state.titleList;

        // At the moment the filter will not work on the default Locaiton/Title valuse
        if (location !== "Location" || title !== "Name")
        {
            for (var i=jobArray.length-1; i>=0; i--) {
                if (jobArray[i].location.name.includes (location) && jobArray[i].title.includes (title))  {
                    filteredArray.push(jobArray[i]);
                }
            }
            console.log(filteredArray);
            this.setState({jobListFilter: filteredArray}, function () {
                console.log(this.state.jobListFilter);
            });
        }
     }

    render () {
        return (
            <div className="jobList">
                <h1>Job board</h1>
                <div className="jobList-container">
                    <JobList data={this.state.jobListFilter} />
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