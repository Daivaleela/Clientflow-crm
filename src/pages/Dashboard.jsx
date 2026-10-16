import { useContext } from "react";
import { CustomerContext } from "../context/CustomerContext";
import DashboardCard from "../components/DashboardCard";
import { FaUsers, FaUserCheck, FaUserClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Dasboard =()=>{

    const { customers } = useContext(CustomerContext);
    const navigate= useNavigate()

    const totalCustomers = customers.length;

    const activeCustomers = customers.filter(item=> item.status =="Active");
    const activeCustomersCount =activeCustomers.length

    const inactiveCustomers = customers.filter(item=> item.status =="Inactive");
    const inactiveCustomersCount = inactiveCustomers.length;

    const recentCustomers = customers.slice(-3);
    console.log("top3Customers",recentCustomers)


    return(
        <div className="min-h-screen bg-gray-50 p-6 mb-6">
            <h1 className="text-3xl font-bold text-gray-800">
                Dashboard
            </h1>
          
           
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <DashboardCard
                    title={"Total Customers"}
                    value ={totalCustomers}
                    color="bg-blue-100 border border-blue-400" 
                    textColor="text-blue-700"
                    icon={<FaUsers />}
                />
                <DashboardCard 
                    title={"Active Customers"}
                    value ={activeCustomersCount}
                    color="bg-green-100 border border-green-400" 
                    textColor="text-green-700"
                    icon={<FaUserCheck />}
                />
                <DashboardCard
                    title={"InActive Customers"}
                    value ={inactiveCustomersCount}
                    color="bg-red-100 border border-red-400"
                    textColor="text-red-700" 
                    icon={<FaUserClock />}
                />
            </div>

           <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mt-8">
                            
                <div className="p-5 border-b border-gray-200 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-800">
                        Recent Customers
                    </h2>
                    <button
                        onClick={() => navigate("/customers")}
                        className="text-sm font-medium text-white hover:text-blue-800  cursor-default bg-blue-500 px-3 py-4 rounded-xl"
                        >
                        View All
                    </button>
                </div>

                <table className="w-full text-center">
                    <thead>
                    <tr className="bg-gray-50 border-b">
                        <th className="text-center p-3 text-sm font-semibold text-gray-600">Name</th>
                        <th className="text-center p-3 text-sm font-semibold text-gray-600">Email</th>
                        <th className="text-center p-3 text-sm font-semibold text-gray-600">Company</th>
                        <th className="text-center p-3 text-sm font-semibold text-gray-600">Status</th>
                    </tr>
                    </thead>

                    <tbody>
                    {recentCustomers.map((item) => (
                        <tr key={item.id}  className="border-b hover:bg-gray-50"    >
                        <td  className="p-3 text-sm text-gray-700">{item.name}</td>
                        <td  className="p-3 text-sm text-gray-700">{item.email}</td>
                        <td  className="p-3 text-sm text-gray-700">{item.company}</td>
                        <td 
                            className={
                                    item.status === "Active"
                                        ? "bg-green-300 text-green-800 px-2 py-1 rounded-full text-sm"
                                        : "bg-red-300 text-red-700 px-2 py-1 rounded-full text-sm"
                                    }>
                            {item.status}
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
        
    )
}   
export default Dasboard;
