// hooks
import { useCounter } from './hooks/useCounter';

const App = () => {
  const { counter, increment, decrement } = useCounter();
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <div>
        <button onClick={() => increment()}>+1</button>
        <span> | </span>
        <button onClick={() => decrement()}>-1</button>
      </div>
      <div>
        <button onClick={() => increment(10)}>+10</button>
        <span> | </span>
        <button onClick={() => decrement(10)}>-10</button>
      </div>
      <div>
        <button onClick={() => increment(100)}>+100</button>
        <span> | </span>
        <button onClick={() => decrement(100)}>-100</button>
      </div>
    </div>
  );
};

export default App;
