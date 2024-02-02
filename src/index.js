import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Invoices from "./components/Invoices/Invoices";
import Expenses from "./components/Expenses/Expenses";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/invoices" element={<Invoices />}>
          {/* <Route path='/invoices/:123' element={<div>Bills</div>}/> */}
        </Route>
        <Route path="/expenses" element={<Expenses />} />
      </Route>
      <Route
        path="*"
        element={
          <main className="text-center">
            <h1 className="text-3xl">There's nothing here</h1>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
