import { Outlet,Link } from "react-router-dom";
import { getInvoices } from "../Data/Data";



export default function Invoices(){
    let invoices = getInvoices();

    return(
        <main className="text-center">
            <div className="flex flex-col gap-3">
                {invoices.map(invoice=>(
                    <Link 
                    className="bg-gray-200"
                    to={`/invoices/${invoice.number}`}
                    key={invoice.number}
                    >{invoice.name}</Link>
                ))}


            </div>
            </main>
    );
}