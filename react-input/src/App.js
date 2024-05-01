import { useState } from 'react';
import './App.css';
import InputComponent from './components/InputComponent';
import TextComponent from './components/TextComponent';

function App() {
  const [inputText, setInputText] = useState('')
  return (
    <div className="App">
      <InputComponent setInputValue={setInputText} />
      <TextComponent inputText={inputText} />
    </div>
  );
}

export default App;
