import React from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import TodoPage from "../../page/TodoPage";
import AuthPage from "../../page/AuthPage";

export const Header = () => {

  return (
    <div>
      <Link to='/todos'>Todolist</Link>
      <Link to='/calculator'>Calculator</Link>


     

    
    </div>
  );
};
