import React from 'react';
import PropTypes from 'prop-types';

const scaleName ={
    c : 'Celcius',
    f: 'Faherehite'
};

class TemperatureInput extends React.Component{
    constructor(props,context){
        super(props,context);
        this.onchangeOfTextBox = this.onchangeOfTextBox.bind(this);
    }
    onchangeOfTextBox(e){
        this.props.onTemperatureChange(e.target.value);
    }
    render(){
        const temperature  = this.props.temperature;
        return(
            <div>
               <fieldset>
                <legend>Enter The Temperature in {scaleName[this.props.scale]}</legend>
                <input type="text" value ={temperature} onChange = {this.onchangeOfTextBox}  />
               </fieldset>
            </div>
        );
    }
}

TemperatureInput.propTypes ={
    scale : PropTypes.string,
    onTemperatureChange: PropTypes.function,
    temperature : PropTypes.number.isRequired
};
export default TemperatureInput;