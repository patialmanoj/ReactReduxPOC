import React  from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import { prototype } from 'stream';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';

class CoursePage extends React.Component{
    constructor(props,context){
        super(props,context);
      
    }
    coureseRow(course, index){
        return <div key={index}>{course.title}</div>;
    }
    render(){
        const {courses} = this.props;
        return(
            <div>
                <h1>Courses</h1>
                <CourseList courses={courses} />
               
            </div>
        );
    }
}




function mapStateToProps(state,ownprops){
    return{
        courses : state.courses 
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(courseActions ,dispatch)
    };

}


export default connect(mapStateToProps, mapDispatchToProps)(CoursePage); // wraps courese page


// class BeerPage extends React.Component{
// render(){
//     return (
//         <div>
//             <h1>beers</h1>
//         </div>
//         )
//     }
// }
