import './styles.css';

export default function Button({ text }) {
  return (
    <button className={text === 'Adicionar' ? 'button' : 'button2'}>
      {text}
    </button>
  );
}
