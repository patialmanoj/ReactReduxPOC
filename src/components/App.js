import React  from 'react';//, {PropTypes}
import PropTypes from 'prop-types';
import Header from './common/header';

class App extends React.Component{
    render(){
        return(
            <div className="container-fluid" >
            <Header/>
            {this.props.children}
            </div>
        );
    }
}
App.PropTypes ={
    children: PropTypes.object.isRequired
};

export default App;