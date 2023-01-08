
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App(props) {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter)
  const addCounterBy = (num) => {
    dispatch({ type: 'ADD_COUNTER_BY', payload: num })
  }
  const [ num, setNum ] = useState(0)
  console.log(counter)
  const { count } = counter;
  return (
    <div className="counterWrapper">
      <div className="counterDisplay">
        {count}
      </div>
      <div className="counterButtons">
        <div onClick={() => dispatch({ type: 'ADD_COUNTER' })} className="counterButton">
          +
        </div>
        <div onClick={() => dispatch({ type: 'SUBTRACT_COUNTER' })} className="counterButton">
          -
        </div>
        <div onClick={() => addCounterBy(parseInt(num, 10))} className="counterButton">
          Increment by <input onChange={e => setNum(e.target.value)} value={num} />
        </div>
      </div>
    </div>
  );
};

export default App;