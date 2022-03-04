
import { Router , Route  } from "react-router-dom";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" component={<MainPage />} />
      </Router>
    </div>
  );
}

export default App;
