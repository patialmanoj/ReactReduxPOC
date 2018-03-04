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
    }

    updateCourseState(event){
        const field = event.target.name;
        let course =   this.state.course ; //Object.assign({}, this.state.course);
        course[field] = event.target.value;
        return this.setState({course: course});

    }
    render(){
            return(
                <div>
                    <CourseForm 
                       
                        course ={this.state.course} 
                        allAuthors=  {this.props.authors}
                        onChange = {this.updateCourseState}
                        errors = {this.state.errors}   
                    />
                </div>
            ) ;
        }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors : PropTypes.array.isRequired
};


function mapStateToProps(state,ownprops){ // state here is store state
    let course ={id:'', watchHref: '' ,title:'' ,authorId:'',length:'',category:'' };
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

