import './App.css';
import Buttons from './components/Buttons';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Counter countNumber={count} />
      <Buttons setCount={setCount} />
    </div>
  );
}

export default App;
