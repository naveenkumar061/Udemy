import { useEffect, useState } from "react";
import Message from "./Message";

function App() {
  const [advice, setAdvice] = useState("");
  const [readCount, setReadCount] = useState(0);
  async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const result = await response.json();
    console.log(result.slip.advice);
    setAdvice(result.slip.advice);
    setReadCount((readCount) => readCount + 1);
  }
  useEffect(function () {
    getAdvice();
  }, []);
  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={() => getAdvice()}>Get advice</button>
      <Message readCount={readCount} advice={advice} />
    </div>
  );
}
export default App;
