import { useState } from 'react';
import './styles.css';
import Button from './components/Button';

import taskData from './data';
import Item from './components/Item';

function App() {
  const [textInput, setTextInput] = useState('');
  const [tasks, setTasks] = useState(taskData);

  function handleTextInput(event) {
    setTextInput(event.target.value);
  }

  function addItem() {
    const newTask = {
      id: Date.now().toString(),
      name: textInput,
      status: false,
    };
    setTasks([...tasks, newTask]);
    setTextInput('');
  }

  function deleteItem(id) {
    const temp = tasks.filter(item => item.id !== id);
    setTasks(temp);
  }

  return (
    <>
      <header className='header'>
        <input
          value={textInput}
          className='input'
          onChange={event => handleTextInput(event)}
        />
        {textInput}
        <div className='buttons-container'>
          <Button text='Adicionar' onClick={addItem} />
          <Button text='Limpar' />
        </div>
      </header>

      <main>
        {tasks.length > 0 ? (
          tasks.map(task => (
            <div>
              <Item
                key={task.id}
                id={task.id}
                name={task.name}
                status={task.status}
                funcaoApagar={deleteItem}
              />
            </div>
          ))
        ) : (
          <span>Nenhuma Tarefa Adicionada</span>
        )}
      </main>
    </>
  );
}

export default App;
