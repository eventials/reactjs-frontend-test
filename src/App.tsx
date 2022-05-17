import { UserContextProvider } from "context";
import Routing from "routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Routing />
      </UserContextProvider>
    </div>
  );
}

export default App;
