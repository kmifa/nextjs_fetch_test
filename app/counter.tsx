'use client';
import { useCounter } from './context/counterProvider';

const Counter = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useCounter();
  const increment = () => setCount((prev) => count + 1);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={increment} className='px-2 py-1 rounded-lg bg-blue-600 text-white'>Increment</button>
      {children}
    </>
  );
}

export default Counter;