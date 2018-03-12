import React from 'react';//, {PropTypes} 
import PropTypes from 'prop-types';
import {Link,IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
    return(
       <div className = "header_app">
            <nav className="navbar navbar-default">
                <IndexLink to="/" activeClassName="active" className="nav navbar-nav">Home</IndexLink>
                {" | "}
                <Link to="/courses" activeClassName="active">Courses</Link>
                {" | "}
                <Link to="/course" activeClassName="active">Manage Course</Link>
                {" | "}
                <Link to="/about" activeClassName="active">About</Link>
                {" | "}
                <Link to="/jsxplayground" activeClassName="active">Play With JSX</Link>
                {loading && <LoadingDots interval={100} dots ={20}/>}
                
            </nav>
        </div>
    );
};

Header.propTypes={
    loading : PropTypes.bool.isRequired
};
export default Header;
