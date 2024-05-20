import { useEffect, useState } from 'react';
import './App.css';
import Button from './Card/Button/Button';
import Card from './Card/Card';

function App() {
  const [count, setCount] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${count}/photos`)
      .then((res) => res.json())
      .then((data) => {
        setData(data[count]);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [count]);

  function handleButtonIncrease() {
    setCount((count) => count + 1);
  }

  function handleButtonDecrease() {
    setCount((count) => (count > 1 ? count - 1 : 1));
  }

  console.log(data)

  return (
    <div className="App">
      <Button handleButton={handleButtonDecrease} btntext="Decrease" />
      <Card data={data} />
      <Button handleButton={handleButtonIncrease} btntext="Increase" />
    </div>
  );
}

export default App;
