function Message(props) {
  return (
    <div>
      {props.advice && <h1>{props.advice}</h1>}
      <p>
        You have read <strong>{props.readCount}</strong> pieces of advice.
      </p>
    </div>
  );
}

export default Message;
