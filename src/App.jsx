import Content from "./Content";
import ConfirmButton from "./ConfirmButton";
import ReturnButton from "./ReturnButton";

function App() {
  return (
    <div className="App">
      <div style={{ width: "300px", height: "300px" }}>
        <Content></Content>
      </div>
      <ReturnButton></ReturnButton>
      <ConfirmButton></ConfirmButton>
    </div>
  );
}

export default App;
