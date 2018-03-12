import React from 'react';
import PropTypes from 'prop-types';
import TemperatureInput from './TemperatureInput';



class TemperatureCalculator extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state ={
            temperature : '',
            scale : 'c'
        };
        this.onchangeOfDegreeCelcius = this.onchangeOfDegreeCelcius.bind(this);
        this.onchangeOfFaherenhite = this.onchangeOfFaherenhite.bind(this);
        this.tryConvert = this.tryConvert.bind(this);
        this.toCelsius = this.toCelsius.bind(this);
        this.toFahrenheit =  this .toFahrenheit.bind(this);
    }
    onchangeOfDegreeCelcius(temperature)  {
        this.setState({
            scale : 'c',
            temperature });
    }
    toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
      }
    onchangeOfFaherenhite(temperature)  {
        this.setState({
            scale : 'f',
            temperature 
        });
    }
    toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
      }
     tryConvert(temperature, convert) {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
          return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
      }
    render(){
        const scale = this.state.scale;
        const temperature =  this.state.temperature;
        const celcius =  scale == 'f' ? this.tryConvert(temperature,this.toCelsius):temperature;
        const feherenhite = scale == 'c'? this.tryConvert(temperature,this.toFahrenheit): temperature;  
        const message =  celcius > 100 ? <h5>Water would boil</h5>: <h5>Water would not boil</h5> ;
        return(
            <div>
                <span>Calculator</span>
                <TemperatureInput scale = "c"  temperature ={celcius} onTemperatureChange = {this.onchangeOfDegreeCelcius}/>
                <TemperatureInput scale = "f" temperature ={feherenhite} onTemperatureChange = {this.onchangeOfFaherenhite}/>
                {message}
            </div>
        );
    }
}

export default TemperatureCalculator;