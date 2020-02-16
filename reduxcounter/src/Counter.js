import React, { Component } from "react";

console.log('-- Counter.js 실행');
class Counter extends Component {
    render() {
        console.log('-- Counter:render 실행');
        console.log('-----------------------------------');
        return (
            <div className="container">
                <button className="buttons"
                        onClick={this.props.decreaseCount}>-</button>
                <span>{this.props.countValue}</span>
                <button className="buttons"
                        onClick={this.props.increaseCount}>+</button>
            </div>
        );
    }
}
console.log('-----------------------------------');

export default Counter;