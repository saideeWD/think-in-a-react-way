import { Link, Outlet, } from "react-router-dom";


function App() {
  return (
    <div className="container mx-auto flex gap-4">
      <nav className="bg-gray-100">
        <Link to="/invoices"> <span>Invoices </span></Link>
        <Link to="/expenses"><span> Expenses</span></Link>
       

      </nav>
      <Outlet></Outlet>
      
    </div>
  );
}

export default App;
