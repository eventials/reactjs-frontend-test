import { UserContextProvider } from "context/UserContext";
import { AuthContextProvider } from "context/AuthContext";
import Routing from "routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <UserContextProvider>
          <Routing />
        </UserContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
