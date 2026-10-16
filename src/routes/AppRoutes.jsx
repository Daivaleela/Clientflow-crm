import { Route,Routes } from "react-router-dom";
import Dashboard from '../pages/Dashboard'
import CustomerDetails from "../pages/CustomerDetails";
import CustomerForm from "../pages/CustomerForm";
import Customers from '../pages/Customers'

const AppRoutes =()=>{
    return(
       
        <Routes >
            <Route path="/" element={<Dashboard/>} /> 
            <Route path="/Details/:id" element={<CustomerDetails/>}  />
            <Route path="/customers" element={<Customers/>}  />
            <Route path="/cus/new" element={<CustomerForm/>}  />
            <Route path="/cus/edit/:id" element={<CustomerForm/>}  />
        </Routes>
        
    )

}
export default AppRoutes;