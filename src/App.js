import { useState } from 'react';
import './styles.css';
import Button from './components/Button';

const task = {
  id: '1',
  nome: 'Fazer Café',
  status: false,
};

function App() {
  const [textInput, setTextInput] = useState('');
  const [tasks, setTasks] = useState([
    { id: '1', nome: 'Fazer Café', status: false },
    { id: '2', nome: 'Estudar React', status: true },
  ]);

  function handleTextInput(event) {
    setTextInput(event.target.value);
  }
  return (
    <>
      <header className='header'>
        <input className='input' onChange={event => handleTextInput(event)} />
        {textInput}
        <div className='buttons-container'>
          <Button text='Adicionar' />
          <Button text='Limpar' />
        </div>
      </header>
    </>
  );
}

export default App;
