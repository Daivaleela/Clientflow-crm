import { createContext,useState } from "react";
export const CustomerContext = createContext(); 

const CustomerProvider = ({ children }) => {

    const [customers, setCustomers] = useState([
            {
                id: 1,
                name: "Rahul",
                email: "rahul@gmail.com",
                phone: "9876543210",
                company: "ABC Solutions",
                status: "Active",
                location:"Mumbai"
            },
            {
                id: 2,
                name: "Daiva",
                email: "Daiva@gmail.com",
                phone: "6302117184",
                company: "RIL",
                status: "Active",
                location:"Mumbai"
            },
            {
                id: 3,
                name: "Leela",
                email: "Leela@gmail.com",
                phone: "8500033911",
                company: "Jio",
                status: "Active",
                location:"Mumbai"
            },
            {
                id: 4,
                name: "Vamshi",
                email: "Vamshi@gmail.com",
                phone: "6302117184",
                company: "HDFC",
                status: "Active",
                location:"Mumbai"
            }
        ]);

    const handleAddCustomer = (newCustomer) => {
        const customerWithId = {
            ...newCustomer,
            id: customers.length + 1
            
        };

        setCustomers([...customers, customerWithId]);
    };

    const handleUpdateCustomer = (updatedCustomer) => {
    // update the matching customer
     const updatedCustomers=   customers.map((item) =>
            item.id === updatedCustomer.id
            ? updatedCustomer
            : item
        )

        setCustomers(updatedCustomers);
    };

    return (
        <CustomerContext.Provider value={{ customers, setCustomers,handleAddCustomer,handleUpdateCustomer }}>
            {children}
        </CustomerContext.Provider>
    );
};

export default CustomerProvider;