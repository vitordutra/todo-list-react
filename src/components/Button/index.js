import './styles.css';

export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={props.text === 'Adicionar' ? 'button' : 'button2'}>
      {props.text}
    </button>
  );
}
