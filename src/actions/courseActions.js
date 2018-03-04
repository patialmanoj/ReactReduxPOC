import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
// // actions
// export function createCourse(course){
//     return {type: types.CREATE_COURSE ,course};
// }
export function loadCoursesSuccess(courses){
    return {type: types.LOAD_COURSES_SUCCESS , courses};
}
// thunk
export function loadCourses(){
    return function(dispatch){ // wrapper function
        // async call
        return courseApi.getAllCourses().then(courses=>{
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    };

}