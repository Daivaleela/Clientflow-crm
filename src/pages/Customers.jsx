import Button from "../components/Button";
import Input from "../components/Input"
import {useState} from 'react';
import Label from "../components/Label";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CustomerContext } from "../context/CustomerContext";
import Dropdown from "../components/Dropdown"
import { FaUserEdit } from "react-icons/fa";
import { LiaStreetViewSolid } from "react-icons/lia";
import { MdAutoDelete } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";



const Customers =()=>{

    const [searchinput,setSearchInput] = useState("");
    const navigate = useNavigate();
    const { customers, setCustomers } = useContext(CustomerContext);
    const [FilteredCustomers,setFilteredCustomers] = useState([]);
    const [statusFilter, setStatusFilter] = useState("All");

    const statusOptions = ["All", "Active", "Inactive"];

    const [sortOption, setSortOption] = useState("Default");
    const sortOptions = ["Default", "Name A-Z", "Name Z-A"];

  
    

   
    const handleSearchOnChange =(e)=>{
        setSearchInput(e.target.value);
    }

    const handleDelete = (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this customer?"
        );

        if (confirmDelete) {
            const delrec = customers.filter(
            (item) => item.id !== id
            );

            setCustomers(delrec);
        }
    };

    const handleEdit =(id)=>{
        navigate(`/cus/edit/${id}`);
    }

    const searchrec= customers.filter((item)=>(item.name.toLowerCase().includes(searchinput.toLowerCase())||
                                            item.email.toLowerCase().includes(searchinput.toLowerCase()) ||
                                            item.company.toLowerCase().includes(searchinput.toLowerCase()) ||
                                            item.phone.includes(searchinput)) &&(statusFilter === "All" || item.status === statusFilter));

    if(sortOption==="Name A-Z"){
        searchrec.sort((a, b) => a.name.localeCompare(b.name))
    }
    else if(sortOption==="Name Z-A"){
        searchrec.sort((a, b) => b.name.localeCompare(a.name))
    }


    const handleView =(id)=>{
        navigate(`/Details/${id}`)
    }


    return(
       <div className="w-full min-w-0 min-h-screen bg-gradient-to-br from-blue-100 via-blue-100 to-sky-100 p-4 md:p-6 rounded-xl">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-3xl font-bold text-green-800"> Customers</h2>
                    
                    <p className="text-sm text-blue-700 mt-1">
                        Manage and track your customers
                    </p>
                </div>
            
                <Button
                    text="+ Add Customer"
                    onClick={() => navigate("/cus/new")}
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2.5 font-medium transition-colors cursor-pointer"
                />

            </div>
           
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
                <div className="flex flex-col md:flex-row md:items-end gap-4">

                    {/* Search */}
                    <div className="w-full md:flex-1">
                        <Label text="Search" />

                        <Input
                            name="searchinput"
                            type="text"
                            value={searchinput}
                            onChange={handleSearchOnChange}
                            className="w-full border border-violet-200 rounded-lg px-4 py-2.5
                                    text-sm text-gray-700 bg-white
                                    placeholder:text-gray-400
                                    focus:outline-none focus:ring-2 focus:ring-violet-500
                                    focus:border-violet-500"
                        />
                    </div>

                    {/* Status Filter */}
                    <div className="w-full md:w-48">
                        <Label text="Filter by Status" />

                        <Dropdown
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            options={statusOptions}
                        />
                    </div>

                    {/* Sorting */}
                    <div className="w-full md:w-48">
                        <Label text="Sort Customers" />

                        <Dropdown
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                            options={sortOptions}
                        />
                    </div>

                </div>
            </div>
                
            <div className="w-full max-w-full overflow-x-auto rounded-xl border border-blue-200 bg-blue-50 shadow-md">
                <table className="w-full min-w-[900px] text-left">
                    <thead>
                    <tr className="bg-blue-200 border-b border-blue-300">
                        <th className="px-5 py-4 text-sm font-bold text-blue-950">
                        Name
                        </th>
                        <th className="px-5 py-4 text-sm font-bold text-blue-950">
                        Email
                        </th>
                        <th className="px-5 py-4 text-sm font-bold text-blue-950">
                        Phone
                        </th>
                        <th className="px-5 py-4 text-sm font-bold text-blue-950">
                        Company
                        </th>
                        <th className="px-5 py-4 text-sm font-bold text-blue-950">
                        Location
                        </th>
                        <th className="px-5 py-4 text-sm font-bold text-blue-950">
                        Status
                        </th>
                        <th className="px-5 py-4 text-sm font-bold text-blue-950">
                        Action
                        </th>
                    </tr>
                    </thead>

                    <tbody>
                    {searchrec.length > 0 ? (
                        searchrec.map((item) => (
                        <tr
                            key={item.id}
                            className="border-b border-blue-100 hover:bg-sky-100 transition-colors  duration-200 hover:bg-blue-100"
                        >
                            <td className="px-5 py-4 text-sm font-medium text-slate-800">
                            {item.name}
                            </td>

                            <td className="px-5 py-4 text-sm text-slate-700">
                            {item.email}
                            </td>

                            <td className="px-5 py-4 text-sm text-slate-700">
                            {item.phone}
                            </td>

                            <td className="px-5 py-4 text-sm text-slate-700">
                            {item.company}
                            </td>

                            <td className="px-5 py-4 text-sm text-slate-700">
                            {item.location}
                            </td>

                            <td className="px-5 py-4">
                            <span
                               className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                            item.status === "All"
                                                ? ""
                                                : item.status === "Active"
                                                ? "bg-green-500 text-gray-800"
                                                : "bg-rose-600 text-gray-800"
                                            }`}
                            >
                                {item.status}
                            </span>
                            </td>

                            <td className="px-5 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-2">
                                <Button
                                text={<FaUserEdit size={20}/>}
                                className="bg-amber-600 hover:bg-blue-600 text-white rounded-lg px-3 py-2 text-sm cursor-pointer transition-colors"
                                onClick={() => handleEdit(item.id)}
                                />

                                <Button
                                text ={<MdAutoDelete size={20} />}
                                className="bg-red-800 hover:bg-red-600 text-white rounded-lg px-3 py-2 text-sm cursor-pointer transition-colors"
                                onClick={() => handleDelete(item.id)}
                                />

                                <Button
                                text ={<IoEyeSharp size={20}/>}
                                className="bg-blue-600 hover:bg-white text-gray-900 rounded-lg px-3 py-2 text-sm cursor-pointer transition-colors"
                                onClick={() => handleView(item.id)}
                                />
                            </div>
                            </td>
                        </tr>
                        ))
                    ) : (
                        <tr>
                        <td
                            colSpan={7}
                            className="px-5 py-8 text-center text-blue-700 font-medium"
                        >
                            No customers found.
                        </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Customers;
