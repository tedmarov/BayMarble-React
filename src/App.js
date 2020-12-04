import './App.css';
import { Home } from "./Home.js"

function App() {
  const user = { id: 1, name: "Ted" }
  return (
    <div className="app">
      <Home user={user} />
    </div>
  );
}

export default App;