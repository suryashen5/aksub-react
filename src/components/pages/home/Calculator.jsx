import React, {Component} from 'react'
import CalculatorContainer from './CalculatorContainer';

class Calculator extends Component{
    state = {
        number: {
            firstNumber: 0,
            secondNumber: 0
        },
        currentOperator:"+"
    };

    handleChange = event => {
        const{value,name} = event.target;
        let {number} = this.state;
        number[name] = parseInt(value);
        this.setState({number});
    };

    handleOperatorChange = value => {
        this.setState({currentOperator: value});
    };

    getResult = (firstNumber, currentOperator, secondNumber) => {
        switch (currentOperator){
            case "+":
                return firstNumber + secondNumber;
            case "-":
                return firstNumber - secondNumber;
            case "*":
                return firstNumber * secondNumber;
            default:
                return firstNumber / secondNumber;
        }
    };

    render(){
        const {firstNumber, secondNumber} = this.state.number;
        const {currentOperator} = this.state;
        return(
            <div>
                <h1>Calculator Sederhana</h1>
                <div>
                    <input name="firstNumber" onChange={this.handleChange} defaultValue={firstNumber}/> 
                    {currentOperator}
                    <input name="secondNumber" onChange={this.handleChange} defaultValue={secondNumber}/> 
                    = 
                    <input value={this.getResult(firstNumber,currentOperator,secondNumber)} disabled/>
                </div>
                <div className="current-operators">
                    <CalculatorContainer onOperatorChange={this.handleOperatorChange} />
                </div>
            </div>
        );
    }
}

export default Calculator;