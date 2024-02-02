import { Outlet, Link, NavLink } from "react-router-dom";
import { getInvoices } from "../Data/Data";

export default function Invoices() {
  let invoices = getInvoices();
  let activeClassName = "text-red-400  bg-grey-200";

  return (
    <main className="text-center">
      <Outlet></Outlet>
      <div className="flex flex-col gap-3">
        {invoices.map((invoice) => (
          <NavLink
            // style={({isActive})=>{
            //     return
            //     (
            //         color: isActive ? 'red':''
            //     )
            // }}
            className={({ isActive }) => (isActive ? activeClassName : "")}
            // className="bg-gray-200"
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
            target="_blank"
          >
            {invoice.name}
          </NavLink>
        ))}
      </div>
    </main>
  );
}
