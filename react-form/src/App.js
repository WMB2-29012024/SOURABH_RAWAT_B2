import { useState } from 'react';
import './App.css';
import CardComponent from './components/CardComponent';
import FormComponent from './components/FormComponent';

function App() {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className="App">
      <FormComponent setInputValue={setInputValue} inputValue={inputValue} />
      <CardComponent inputValue={inputValue} />
    </div>
  );
}

export default App;
