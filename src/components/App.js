import React , {PropTypes}  from 'react';//, {PropTypes}
//import PropTypes from 'prop-types';
import Header from './common/Header';

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
// App.PropTypes = {
//     children : PropTypes.Object
// };

export default App;