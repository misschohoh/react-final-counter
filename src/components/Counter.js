import React from 'react';

const Counter = ({ clicked, count, onDecrement, onIncrement, onChangeCount, onNewValue }) => {

    return (
      <div>
        <div>
          <button onClick={onDecrement}>-</button>
          <span>{count}</span>
          <button onClick={onIncrement}>+</button>
          <br />
          <p>how many times the plus minus has been clicked:{clicked}</p>
          <br />
          <input type="number" onChange={event => onNewValue(event.target.value)} />

          
          <button onClick={() => onChangeCount()}>Change Count Number</button>
        </div>
      </div>
    );
}


export default Counter;