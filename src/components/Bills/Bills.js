import { useParams } from "react-router-dom"
import { getInvoice } from "../Data/Data";

export default function Bills(){
    let params =useParams();
   let invoice = getInvoice(params.invoiceld)
    
    return <main className="flix flix-col pay-5 border my-4 w-1/3 mx-aut"> 
  <h1>Total  due : {invoice.number}</h1>
   <p> Name :  {invoice.name}:  Amount :  {invoice.amount}</p>
   <p>Due Date : {invoice.due}</p>
   <p></p>
    </main>
}