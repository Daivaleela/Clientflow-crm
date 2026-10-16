import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import AppRoutes from "../../routes/AppRoutes";


const Layout =()=>{
    return(
 
        <div className="min-h-screen w-full">
        <Navbar />

        <div className="flex w-full">
            <div className="w-64 shrink-0">
             <Sidebar />
            </div>

            <main className="flex-1 min-w-0 p-4">
                <AppRoutes />
            </main>
        </div>
        </div>

      
    )
}
export default Layout;