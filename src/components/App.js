import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, changeCount, changeNewValue } from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter clicked={this.props.clicked} count={this.props.count} onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement} onNewValue={this.props.onNewValue} onChangeCount={this.props.onChangeCount} />
      </div>
    );
  }
}
///dispatch means change something in the redux store. parameter will be one thing
function mapDispatchToProps(dispatch, state) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onChangeCount: () => dispatch(changeCount()),
    onNewValue: (newValue) => dispatch(changeNewValue(newValue))
  };
}
function mapStateToProps(state) {
    return {
      count: state.count,
      clicked:state.clicked,
      newValue: state.changeCountValue
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);