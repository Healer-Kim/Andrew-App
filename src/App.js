
import { Router , Route  } from "react-router-dom";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";

function App() {
  return (
    <div>
      <Router>
        <Route>exact path="/login" component={LoginPage}</Route><LoginPage />
        <MainPage />
      </Router>
    </div>
  );
}

export default App;
