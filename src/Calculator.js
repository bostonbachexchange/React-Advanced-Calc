import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    state = {
        operator: '',
        currentNum: '',
        lastNum: '',
        // num1: '',
        // num2: '',
         display: '0',
        result: '',
        answer: ''
    }
// ////simple cal
//     setNum = (e, num) => {
//         this.setState({ [num]: e.target.value});
//     }
// ////simpl cal
//     setResult = (num1, num2) => {
//         let number1 = parseInt(num1)
//         let number2 = parseInt(num2)
//         let result = (number1 + number2)
//         this.setState({ result: result })
//     }

    clearAll = (e) => {
        this.setState(() => {
            return {
                operator: '',
                num1: '',
                num2: '',
                operation: '',
                answer: '',
                display: '0'
            }
        })
    }

    displayNum = (e) => {
        console.log('e', e)
        if (this.state.currentNum) {
            console.log('num1', this.state.currentNum)
        }
        console.log('display', this.state.display)
        console.log('clicked on', e.target.innerText)
        const displayNum = e.target.innerText
         if (this.state.display === '0') {
            this.setState(() => {
                return {
                    display: displayNum.toString() 
                }
            })
        } else {
            this.setState(() => {
                return {
                    display: this.state.display + displayNum.toString() 
                }
            })}
        // this.setState({ [num]: displayNum}) 
    }

    // handleAdd = () => {
    //     console.log('handleAdd')
    //     console.log('display', this.state.display)
    //     // if (this.state.num1) {
    //     // }
    //     const num = this.state.display
    //     // const numOne = parseInt(this.state.display)
    //     // console.log('numOne', numOne)
    //     this.setState(() => {
    //         return {
    //             num1: this.state.display
    //         }
    //     })
    //     console.log(this.state.num1)
    //     // console.log('num1', this.state.num1)
    // }

    operatorPressed = (e) => {
        const operator = e.target.innerText
        this.setState(() => {
            return {
                operator: operator,
                lastNum: this.state.display,
                display: '0'
            }
        })
        console.log('operator', this.state.operator)
        console.log('lastNum', this.state.lastNum)  
    }
    
    calculate = (e) => {
        console.log('operator', this.state.operator)
        let total = null
        const num1 = Number(this.state.display)
        const num2 = Number(this.state.lastNum)
        console.log('num1', num1)
        console.log('num1', num2)
        if (this.state.operator === "+") {
            total = num1 + num2
        } else if (this.state.operator === "-") {
            total = num1 - num2
        } else if (this.state.operator === "x") {
            total = num1 * num2
        } else if (this.state.operator === "/") {
            total = num1 / num2
        } else {
            console.log('ooops')
        }
        console.log('total', total)
        // const operator = e.target.innerText
        this.setState(() => {
            return {
                display: total
            }
        })
        console.log('operator', this.state.operator)
    }

    // handleSubtract = () => {
    //     const newSum = parseInt(this.state.num1) - parseInt(this.state.num2)
    //     this.setState(() => {
    //         return {
    //             result: newSum,
    //         }
    //     })
    // }
    
    // handleMultiply = () => {
    //     const newSum = parseInt(this.state.num1) * parseInt(this.state.num2)
    //     this.setState(() => {
    //         return {
    //             result: newSum,
    //         }
    //     })
    // }
    // handleDivide = () => {
    //     const newSum = parseInt(this.state.num1) / parseInt(this.state.num2)
    //     this.setState(() => {
    //         return {
    //             result: newSum,
    //         }
    //     })
    // }

render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{this.state.display}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={this.clearAll}>AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op" onClick={this.operatorPressed}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.displayNum}>7</button>
                    <button className="calc-button" onClick={this.displayNum}>8</button>
                    <button className="calc-button" onClick={this.displayNum}>9</button>
                    <button className="calc-button calc-button-op" onClick={this.operatorPressed}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.displayNum}>4</button>
                    <button className="calc-button" onClick={this.displayNum}>5</button>
                    <button className="calc-button" onClick={this.displayNum}>6</button>
                    <button className="calc-button calc-button-op" onClick={this.operatorPressed}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.displayNum}>1</button>
                    <button className="calc-button" onClick={this.displayNum}>2</button>
                    <button className="calc-button" onClick={this.displayNum}>3</button>
                    <button className="calc-button calc-button-op" onClick={this.operatorPressed}>+</button>
                    {/* <button className="calc-button" onClick={this.displayNum}>3</button>
                    <button className="calc-button calc-button-op" onClick={this.handleAdd}>+</button> */}
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={this.displayNum}>0</button>
                    <button className="calc-button" onClick={this.displayNum}>.</button>
                    <button className="calc-button calc-button-op" onClick={this.calculate}>=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator