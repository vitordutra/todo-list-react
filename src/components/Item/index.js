export default function Item(props) {
  return (
    <div>
      <input type='checkbox' defaultChecked={props.status} />
      <span>{props.name}</span>
      {!props.status && (
        <button onClick={() => props.funcaoApagar(props.id)}>Apagar</button>
      )}
    </div>
  );
}
