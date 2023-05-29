import { Route, Routes } from "react-router-dom";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { Header } from "../components/header/Header";
import CalculatorPage from "./CalculatorPage";

const TodoPage = () => {
  return (
    <>
      <Header />
      <TodoForm />
      {/* <Routes>
               <Route path="/calculator"> {<CalculatorPage/>}</Route>

      </Routes> */}
    </>
  );
};

export default TodoPage;
