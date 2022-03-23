import ComponentA from "./componentA";
import ComponentB from "./componentB";

import "./App.css";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <ComponentA />
      <ComponentB />
    </React.Fragment>
  );
}

export default App;
