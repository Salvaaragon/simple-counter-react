// vendor
import { useState } from 'react';

// types
type UseCounter = {
  counter: number;
  decrement: Function;
  increment: Function;
};

const useCounter = (): UseCounter => {
  const [counter, setCounter] = useState<number>(0);

  const increment = (value: number = 1): void => setCounter((prev) => prev + value);
  const decrement = (value: number = 1): void =>
    setCounter((prev) => (prev - value >= 0 ? prev - value : prev));

  return { counter, decrement, increment };
};

export { useCounter };
