import Child1 from "./components/Child1";
import Child2 from "./components/Child2";

function App() {
  return <div className="container">
  <div className="row">
    <div className="col-sm-6">
      <Child1 />
    </div>
    <div className="col-sm-6">
      <Child2 />
    </div>
  </div>

  </div>;
}

export default App;
