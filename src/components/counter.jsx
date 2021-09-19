import React, { Component } from 'react';

class Counter extends Component {
    componentWillUnmount() {
        console.log("Counter -- unmount")
    }

    render() {
        return (
            <div className="row">
                {this.props.children}
                <div className="col-1">
                    <span className="badge bg-primary m-2">{this.formatCount()}</span>
                </div>
                <div className="col">
                    <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm ">+</button>
                    <button onClick={() => this.props.onDecrement(this.props.counter)} className={this.getBadgeClasses()}>-</button>
                    <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm">x</button>
                </div>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "btn btn-secondary btn-sm m-2 ";
        classes += this.props.counter.value === 0 ? "disabled" : "enabled";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value
    }
}

export default Counter;
