import React from 'react';
import PropTypes from 'prop-types';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import TemperatureCalculator from './TemperatureCalculator';

class JSXPlayGroundPage extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state = {
            isCalculatorVisible : false,
            buttonValue : 'Show Calculator'
        };

        this.showCalculator = this.showCalculator.bind(this);
    }
    showCalculator(e) {
        // show the div and rnder temerature 
         if(e.target.value == 'Show Calculator'){
            this.setState({ isCalculatorVisible : true , buttonValue: 'Hide Calculator'});
        }else{
            this.setState({ isCalculatorVisible : false , buttonValue : 'Show Calculator'});
        }

    }
    render(){

        const syntax ={
            244 : "check1",
            'manoj': 244
        };
        const flag = false;
        const arr= [];
        return(
            <div className = "jsx_example">
                <fieldset>
                <legend>Lets Play here , Welcome {this.props.name}</legend>

                <div>{syntax[1+3+48*5]}{true}</div>
                <div>{arr.length && <h3>show This Text</h3>}</div>{ /* this will print 0 , correct way arr.length>0 */ }
                <div> The value of the falg is {String(flag)}</div>
                </fieldset>
                <div id= 'calculatorContainer'>
                 <input type="submit" className="btn btn-primary btn-lg" onClick = {this.showCalculator} value ={this.state.buttonValue}/>  
                 {this.state.isCalculatorVisible && <TemperatureCalculator />}       
                </div>
            </div>
        );
    }
    
}
JSXPlayGroundPage.propTypes = {
    name : PropTypes.string
};
JSXPlayGroundPage.defaultProps = {
    name : 'manoj'
};
JSXPlayGroundPage.context ={
    router : PropTypes.object
};

export  default JSXPlayGroundPage;

