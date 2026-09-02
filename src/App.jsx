import { useState } from "react";
import NavBar from "./components/NavBar";
import Button from "./components/Button";
import Dashboard from "./components/dashboard";
import BudgetEstimator from "./components/budgetestimator";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
     

      <Routes>

        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/budget"
          element={<BudgetEstimator />}
        />

      </Routes>

    </>
  );
}


export default App;