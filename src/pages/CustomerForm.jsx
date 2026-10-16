import  Label from '../components/Label';
import Input from '../components/Input';
import { useEffect, useState } from 'react';
import Button from '../components/Button';
import { useContext } from "react";
import { CustomerContext } from "../context/CustomerContext";
import { useNavigate,useParams } from "react-router-dom";
import Dropdown from '../components/Dropdown';
const CustomerForm =()=>{
    const initialValue ={
        name:"",
        email:"",
        phone :"",
        company :"",
        location :"",
        status:"",
    }

    const [formValues,setFormValues] = useState(initialValue);
    const {customers, handleAddCustomer,handleUpdateCustomer } = useContext(CustomerContext);
    const [status,setStatus] = useState("");
    const statusOptions = ["All", "Active", "Inactive"];
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();
   
    useEffect(() => {
        const findrecord = customers.find(
            (item) => item.id === Number(id)
        );


        if (findrecord) {
            setFormValues(findrecord);
            setStatus(findrecord.status);
        }
    }, [id, customers]);


    

    const validateForm = () => {
        const newErrors = {};

        if (!formValues.name.trim()) {
            newErrors.name = "Customer name is required";
        }
        
        if (!formValues.company.trim()) {
            newErrors.company = "company name is required";
        }
        
        if (!formValues.location.trim()) {
            newErrors.location = "location name is required";
        }
        

        if (!formValues.email.trim()) {
            newErrors.email = "Email address is required";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)
        ) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formValues.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^\d{10}$/.test(formValues.phone)) {
            newErrors.phone = "Enter a valid 10-digit phone number";
        }


        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleOnChange=(e)=>{
        const{name,value}= e.target;
        setFormValues({...formValues,[name]:value})

        setErrors({
            ...errors,
            [name]: "",
        });
    }


    const handleSubmit=(e)=>{
        e.preventDefault();
            if (!validateForm()) {
            return;
        }
        console.log("updated Id", id);

        const customerData = {
            ...formValues,
            status: status
        };
        
        if(id){
            handleUpdateCustomer(customerData)
        }
        else{
            handleAddCustomer(customerData);
        }

        setFormValues(initialValue) 

        navigate("/customers")


    }

    const handleCancel =()=>{
        setFormValues(initialValue);
        setErrors("")
    }




   
    return(
        <div  className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-100 to-blue-100 p-4 md:p-8 rounded-xl" >

              {/* Page Heading */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-blue-950">
                {id ? "Edit Customer" : "Add New Customer"}
                </h1>

                <p className="text-sm text-blue-800 mt-2">
                {id
                    ? "Update your customer's information below."
                    : "Enter customer details to add a new customer to your CRM."}
                </p>
            </div>
            
            <div className="max-w-3xl mx-auto bg-violet-100 rounded-2xl shadow-lg border border-violet-200 p-6 md:p-8">

            <form onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <Label text ="Customer Name :"/>
                    <span className="text-red-500 ml-1">*</span>
                    <Input
                        name ="name"
                        type="text"
                        value ={formValues.name}
                        onChange={handleOnChange}
                        className="w-full border border-violet-200 rounded-lg px-4 py-3
                        bg-white text-gray-700 mt-2
                        focus:outline-none focus:ring-2 focus:ring-violet-500"
                        required
                    />
                    {errors.name && (
                    <p className="mt-1 text-sm text-red-600">
                        {errors.name}
                    </p>
                    )}
                </div>

                <div>
                    <Label text="Email :"/>
                    <span className="text-red-500 ml-1">*</span>
                    <Input
                        name="email"
                        type="text"
                        value={formValues.email}
                        onChange={handleOnChange}
                        className="w-full border border-violet-200 rounded-lg px-4 py-3
                        bg-white text-gray-700 mt-2
                        focus:outline-none focus:ring-2 focus:ring-violet-500"
                        required
                    />
                    {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                        {errors.email}
                    </p>
                    )}
                </div>
                <div>
                    <Label text="Phone :"/>
                    <span className="text-red-500 ml-1">*</span>
                    <Input
                        name="phone"
                        type="tel"
                        value={formValues.phone}
                        onChange={handleOnChange}
                        className="w-full border border-violet-200 rounded-lg px-4 py-3
                        bg-white text-gray-700 mt-2
                        focus:outline-none focus:ring-2 focus:ring-violet-500"
                        required
                    />
                    {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">
                        {errors.phone}
                    </p>
                    )}
                </div>
                <div>
                    <Label text="Company :"/>
                    <span className="text-red-500 ml-1">*</span>
                    <Input
                        name="company"
                        type="text"
                        value={formValues.company}
                        onChange={handleOnChange}
                        className="w-full border border-violet-200 rounded-lg px-4 py-3
                        bg-white text-gray-700 mt-2
                        focus:outline-none focus:ring-2 focus:ring-violet-500"
                        required
                    />
                    {errors.company && (
                    <p className="mt-1 text-sm text-red-600">
                        {errors.company}
                    </p>
                    )}
                </div>
                <div>
                    <Label text="Location :"/>
                    <span className="text-red-500 ml-1">*</span>
                    <Input
                        name="location"
                        type="text"
                        value={formValues.location}
                        onChange={handleOnChange}
                        className="w-full border border-violet-200 rounded-lg px-4 py-3
                        bg-white text-gray-700 mt-2
                        focus:outline-none focus:ring-2 focus:ring-violet-500"
                        required
                    />
                    {errors.location && (
                    <p className="mt-1 text-sm text-red-600">
                        {errors.location}
                    </p>
                    )}
                    
                </div>
                <div>
                    <Label text="Status :"/>
                    <span className="text-red-500 ml-1">*</span> 
                    <Dropdown
                        value ={status}
                        onChange={(e)=>setStatus(e.target.value)}
                        options={statusOptions}
                        className="w-full border border-violet-200 rounded-lg px-4 py-3
                        bg-white text-gray-700 mt-2
                        focus:outline-none focus:ring-2 focus:ring-violet-500"
                        required

                    />
                    {errors.status && (
                    <p className="mt-1 text-sm text-red-600">
                        {errors.status}
                    </p>
                    )}
                </div>
            
                <div className="flex flex-col sm:flex-row  items-stretch sm:items-center gap-3 mt-8 pt-6 border-t border-blue-200">

                    <Button
                        text="Cancel"
                        type="button"
                        onClick={handleCancel}
                        className="w-full sm:w-auto px-6 py-3 rounded-lg border border-violet-300
                                bg-yellow-600 text-violet-950 font-semibold
                                hover:bg-violet-300 transition-colors cursor-pointer"
                    />

                    <Button
                        text={id ? "Update Customer" : "Add Customer"}
                        type="submit"
                        className="w-full sm:w-auto px-6 py-3 rounded-lg
                                bg-blue-600 text-white font-semibold
                                hover:bg-blue-700 shadow-md
                                transition-colors cursor-pointer"
                    />

                    <Button
                        type="button"
                        text="<- Back to Customers"
                        onClick={() => navigate("/customers")}
                        className="w-full sm:w-auto px-6 py-3 rounded-lg
                                    bg-blue-600 text-white font-semibold
                                    border border-blue-700
                                    hover:bg-blue-700 hover:border-blue-800
                                    shadow-md transition-colors cursor-pointer"
                        
                        
                    />

                </div>

            </div>
            </form>
              
        </div>
    </div>
    )
}
export default CustomerForm;