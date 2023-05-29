import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthPage from "./page/AuthPage";
import TodoPage from "./page/TodoPage";
import { Header } from "./components/header/Header";
import CalculatorPage from "./page/CalculatorPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<AuthPage />} />

        <Route path="/todos" element={<TodoPage />} />
        <Route path="/calculator" element={<CalculatorPage />} />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
