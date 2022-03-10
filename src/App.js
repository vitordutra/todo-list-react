import './styles.css';
import Button from './components/Button';

function App() {
  return (
    <>
      <header className='header'>
        <input className='input' />
        <div className='buttons-container'>
          <Button text='Adicionar' />
          <Button text='Limpar' />
        </div>
      </header>
    </>
  );
}

export default App;
