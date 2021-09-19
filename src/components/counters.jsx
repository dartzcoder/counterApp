import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps);
        console.log(prevState);

    }

    render() {
        console.log('props', this.props)
        return (
            <div>
                <button onClick={this.props.onReset}
                    className="btn btn-primary btn-sm m-2">Reset</button>
                {this.props.counters.map(counter => (
                    <Counter
                        key={counter.id} onDelete={this.props.onDelete}
                        counter={counter} onIncrement={this.props.onIncrement}
                        onDecrement={this.props.onDecrement}
                    />
                ))}
            </div>
        );
    }
}

export default Counters;