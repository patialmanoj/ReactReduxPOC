import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import PropTypes from 'prop-types';

const CourseForm = ({course,allAuthors,onSave,onChange,loading,errors}) =>{
    return(
        <form>
            <h1>Manage Course</h1>
            <TextInput
            name = "title"
            label ="Title"
            value= {course.title}
            onchange= {onChange}
            error= {errors.title} />
           
            <SelectInput
            name = "authorId"
            label ="Author"
            value= {course.authorId}
            defaultOption = "Select Author"
            onchange= {onChange}
            options= {allAuthors}
            error= {errors.title} />
           
            <TextInput
            name = "category"
            label ="Category"
            value= {course.category}
            onchange= {onChange}
            error= {errors.category} />

            <TextInput
            name = "length"
            label ="Length"
            value= {course.length}
            onchange= {onChange}
            error= {errors.length} />

            <input
            type ="submit"
            disabled={loading}
            value= {loading? 'Saving...':'Save'}
            className= "btn btn-primary"
            onClick={onSave}/>
        </form>

    );

};

CourseForm.propTypes = {
    course : PropTypes.object.isRequired ,
    allAuthors : PropTypes.array,
    onSave : PropTypes.func.isRequired,
    onChange : PropTypes.func.isRequired,
    loading : PropTypes.bool,
    errors: PropTypes.object.isRequired
   
};

export default CourseForm;