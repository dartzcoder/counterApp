import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        imgUrl: 'https://picsum.photos/200'
    };

    handleIncrement = () => {
        console.log("Increment");
        this.setState((state)=>{
            return {count: state.count + 1};
        });
    }
    
    render(){
        return (<div>
                  <span className="badge bg-primary m-2">{this.formatCount()}</span>
                  <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
                </div>);
    }

   

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { count } = this.state
        return count === 0 ? 'Zero' : count
    }
}

export default Counter;
