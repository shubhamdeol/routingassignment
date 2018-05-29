import React, { Component } from 'react';

class Course extends Component {

    state = {
        courseTitle: '',
    }

    componentDidMount() {
        this.loadSelectedCourse();

    }
    componentDidUpdate() {
        this.loadSelectedCourse();
       
    }

    loadSelectedCourse = () => {
        const query = new URLSearchParams(this.props.location.search);
        for (let each of query.entries()) {
            if (this.state.courseTitle !== each[1])
                this.setState({
                    courseTitle: each[1],
                })
        }
    } 
    render () {
        return (
            <div>
                <h1>Course Title: {this.state.courseTitle}</h1>
                <p>You selected the Course with ID: {this.props.match.params.courseId}</p>
            </div>
        );
    }
}

export default Course;