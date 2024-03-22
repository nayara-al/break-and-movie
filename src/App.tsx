import { BrowserRouter } from "react-router-dom";
import * as Components from "./components";
import { Routes } from "./routes";
function App() {
  return (
    <BrowserRouter>
      <Components.Header/>
      <Components.StructurePage>
        <Routes />
      </Components.StructurePage>
      <Components.Footer />
    </BrowserRouter>
  );
}

export default App;
