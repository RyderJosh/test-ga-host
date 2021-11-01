import "./App.css";
import { useCallback, useState } from "react";

function App() {
  const [url, setUrl] = useState("");

  const inputChangeHandler = useCallback(
    (value) => {
      console.log(value?.target?.value);
      setUrl(value?.target?.value);
    },
    [setUrl]
  );

  const clickHandler = useCallback(() => {
    window.location.href = url;
  },[url]);

  return (
    <div className="App">
      <input type="text" value={url} onChange={inputChangeHandler}></input>
      <br />
      <br />
      <br />
      <a href={url}>{url}</a>
      <br />
      <br />
      <br />
      <button value="Click Me" onClick={clickHandler}> CLICK ME </button>
    </div>
  );
}

export default App;
