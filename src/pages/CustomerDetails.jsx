import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CustomerContext } from "../context/CustomerContext";
import { useNavigate } from "react-router-dom";
import Button from '../components/Button';


const CustomerDetails =()=>{

    const { id } = useParams();
    const Navigate= useNavigate();
    const { customers } = useContext(CustomerContext);
    const customer = customers.find(
        (item) => item.id === Number(id)
    );


    return(
      
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-white via-blue-50 to-indigo-50 shadow-xl rounded-2xl border border-blue-100 p-6 md:p-8">

            {/* Header */}
            <div className="mb-8 border-b border-blue-100 pb-5">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-800">
                Customer Details
                </h2>
                <p className="text-sm text-gray-500 mt-2">
                View customer information and account status.
                </p>
            </div>

            {customer ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                {/* Name */}
                <div className="bg-white rounded-xl p-4 border border-blue-100 shadow-sm">
                    <p className="text-sm text-gray-500 mb-1">Name</p>
                    <p className="font-semibold text-gray-800 break-words">
                    {customer.name}
                    </p>
                </div>

                {/* Email */}
                <div className="bg-white rounded-xl p-4 border border-blue-100 shadow-sm">
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <p className="font-semibold text-gray-800 break-words">
                    {customer.email}
                    </p>
                </div>

                {/* Phone */}
                <div className="bg-white rounded-xl p-4 border border-blue-100 shadow-sm">
                    <p className="text-sm text-gray-500 mb-1">Phone</p>
                    <p className="font-semibold text-gray-800">
                    {customer.phone}
                    </p>
                </div>

                {/* Company */}
                <div className="bg-white rounded-xl p-4 border border-blue-100 shadow-sm">
                    <p className="text-sm text-gray-500 mb-1">Company</p>
                    <p className="font-semibold text-gray-800 break-words">
                    {customer.company}
                    </p>
                </div>

                {/* Location */}
                <div className="bg-white rounded-xl p-4 border border-blue-100 shadow-sm">
                    <p className="text-sm text-gray-500 mb-1">Location</p>
                    <p className="font-semibold text-gray-800 break-words">
                    {customer.location}
                    </p>
                </div>

                {/* Status */}
                <div className="bg-white rounded-xl p-4 border border-blue-100 shadow-sm">
                    <p className="text-sm text-gray-500 mb-2">Status</p>
                    <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ${
                        customer.status === "Active"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-rose-100 text-rose-700"
                    }`}
                    >
                    {customer.status}
                    </span>
                </div>

            </div>
            ) : (
                <p className="text-center text-gray-500 py-8">
                Customer not found.
                </p>
            )}

            {/* Footer */}
            <div className="mt-8 pt-5 border-t border-blue-100">
                <Button
                text="← Back to Customers"
                onClick={() => Navigate("/customers")}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-5 py-3 rounded-xl text-white font-semibold shadow-md transition-all duration-200"
                />
            </div>

        </div>

    )
}
export default CustomerDetails;