import "./App.css";
import User from "./Components/User";

function App() {
  const userName = {
    name: "John",
    age: 30,
  };

  return (
    <div className="App">
      <h1>Hello, React-Redux Tutorial</h1>
      <User userName={userName} />
    </div>
  );
}

export default App;
