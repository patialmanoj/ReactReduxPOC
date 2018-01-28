import React  from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';//save us from manually wrap our action creator in a dispatch call 
import * as beerActions from '../../actions/beerActions'; 
import BeerForm from './BeerForm';

class ManageBeerPage extends React.Component{
    constructor(props,context){
        super(props,context);
        
        this.state = {
            beer   : Object.assign({}, this.props.beer),
            errors : {}
        }
    }
 
    render(){
       
        return(
           
                <BeerForm 
                  allCost = {[]}
                  beer = {this.state.beer}
                  errors = {this.state.errors}
                />
            
        );
    }
}

function mapStateToProps(state,ownprops){ // state is of redux store
    return{
         state : state 
    };
}
function mapDispatchToProps(dispatch){ // what action will be availabe in the function
    return {
        actions: bindActionCreators(beerActions ,dispatch)
    };

}


export default connect(mapStateToProps, mapDispatchToProps)(ManageBeerPage); // wraps courese page