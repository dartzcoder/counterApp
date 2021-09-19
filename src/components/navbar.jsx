import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        console.log(this.props.totalCounters)
        return (
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand">
                    <span className="badge alert-warning m-2">
                        Navbar {this.props.totalCounters}
                    </span>
                </span>
            </nav>
        );
    }
}

export default NavBar;