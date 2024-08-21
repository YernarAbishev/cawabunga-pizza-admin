import "./assets/css/style.css";
import AppRouter from "./components/AppRouter";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="wrapper">
      <Sidebar />
      <AppRouter />
    </div>
  );
}

export default App;
