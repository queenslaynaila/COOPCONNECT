import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="App">
      <h1>Page Count: {count}</h1>
      <p>Just an explanation on file structure, all styles to be in the styles folder in the src ,, pictures go to the asset folder and components go into the components folder</p>
      <p>in case youve added a npm package in the package.json or via a link in the index.html fie in the public directory let me know so i merge accordingly</p>
    </div>
  );
}

export default App;
