import React  from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state ={
            course: Object.assign({},this.props.course),
            errors: {}
        };
        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }
    componentWillReceiveProps(nextProps){
        if(this.props.course.id != nextProps.course.id){
            this.setState({course : Object.assign({},nextProps.course)});
        }
    }
    updateCourseState(event){
        const field = event.target.name;
        let course =   this.state.course ; //Object.assign({}, this.state.course);
        course[field] = event.target.value;
        return this.setState({course: course});

    }
    saveCourse(event){
        event.preventDefault();
        this.props.actions.saveCourse(this.state.course);
        this.context.router.push('/courses');
    }

    render(){
            return(
                <div>
                    <CourseForm 
                       
                        course ={this.state.course} 
                        allAuthors=  {this.props.authors}
                        onChange = {this.updateCourseState}
                        onSave = {this.saveCourse}
                        errors = {this.state.errors}   
                    />
                </div>
            ) ;
        }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors : PropTypes.array.isRequired,
    actions : PropTypes.object.isRequired
};
ManageCoursePage.contextTypes ={
    router : PropTypes.object
};

function getCourseById(courses , Id){
     const course =   courses.filter(course => course.id == Id) ;
     if(course){
         return course[0];
     }
     return null;
}

function mapStateToProps(state,ownprops){ // state here is store state
    const courseId = ownprops.params.id;
    let course ={id:'', watchHref: '' ,title:'' ,authorId:'',length:'',category:'' };
    if(courseId && state.courses.length>0){
        course = getCourseById(state.courses,  courseId);
    }
    const authorsFormatteForDropDown = state.authors.map(author =>  {
        return {
            value :  author.id,
            text  :  author.firstName + ' ' + author.lastName 
        };
    });
    return{
        course : course,
        authors : authorsFormatteForDropDown
    };
}

function mapDispatchToProps(dispatch){ // actions we want to expose on our component
    return {
        actions: bindActionCreators(courseActions ,dispatch)
    };

}


export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage); // wraps courese page

