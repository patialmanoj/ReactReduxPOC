import React  from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import { prototype } from 'stream';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';
import {Router,browserHistory} from 'react-router';

class CoursePage extends React.Component{
    constructor(props,context){
        super(props,context);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }
    coureseRow(course, index){
        return <div key={index}>{course.title}</div>;
    }
    redirectToAddCoursePage(){
        browserHistory.push('/course');
    }

    render(){
        const {courses} = this.props;
        return(
            <div>
                <h1>Courses</h1>
                <input type="submit"
                       value= "Add Course"
                       className="btn btn-primary"
                       onClick={this.redirectToAddCoursePage}/>
                <CourseList courses={courses} />
               
            </div>
        );
    }
}

CoursePage.propTypes = {
    courses: PropTypes.array.isRequired
};


function mapStateToProps(state,ownprops){ // state here is store state
    return{
        courses : state.courses  
    };
}

function mapDispatchToProps(dispatch){ // actions we want to expose on our component
    return {
        actions: bindActionCreators(courseActions ,dispatch)
    };

}


export default connect(mapStateToProps, mapDispatchToProps)(CoursePage); // wraps courese page

