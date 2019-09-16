import React from "react";
import { connect } from "react-redux";
import Header from "./header";
import Footer from "./footer";
import "./app.scss";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    handleIncrementButtonClick = e => {
        e.preventDefault();
        this.setState(previousState => ({
            counter: this.state.counter + 1
        }));
    };

    handleDecrementButtonClick = e => {
        e.preventDefault();
        this.setState(previousState => ({
            counter: this.state.counter - 1
        }));
    };

    render() {
        return (
            <div>
            <h4>{this.state.counter}</h4>
            <button onClick={this.handleIncrementButtonClick}>Increment</button>
            <button onClick={this.handleDecrementButtonClick}>Decrement</button>
            </div>
    );
    }
}

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
            <Header />
            <Counter />
            <Footer />
            </React.Fragment>
    );
    }
}

export default App;
