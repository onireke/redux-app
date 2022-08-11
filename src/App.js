import "./App.css";

const counterReducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    return state - 1;
  } else if (action.type === "ZERO") {
    return 0;
  }
  return state;
};

function App() {
  return <div className="App"></div>;
}

export default App;
