import React from 'react';
import './app.scss';
import Header from './header';
import Footer from './footer';


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

    handleIncrementButtonClick = (e) => {
      e.preventDefault();
      this.setState(previousState => ({
        counter: previousState.counter + 1,
      }));
    };

    handleDecrementButtonClick = (e) => {
      e.preventDefault();
      this.setState(previousState => ({
        counter: previousState.counter - 1,
      }));
    };

    render() {
      const className = this.state.counter < 0 ? 'red' : 'default';
      return (
            <div>
                <h4 className={`${className}`}>{this.state.counter}</h4>
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
