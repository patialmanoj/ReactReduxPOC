import React from 'react';//, {PropTypes} 
import PropTypes from 'prop-types';
import {Link,IndexLink} from 'react-router';

const Header = () => {
    return(
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/courses" activeClassName="active">Courses</Link>
            {" | "}
            <Link to="/beers" activeClassName="active">Beer</Link>
            {" | "}
            <Link to="/about" activeClassName="active">About</Link>
            
           
        </nav>
    );
};
export default Header;