// import {NavLink } from "react-router-dom";

// const Sidebar =()=>{
//     return(
       
// <div className="w-64 min-h-screen bg-gradient-to-b from-indigo-600 via-blue-700 to-violet-800 p-4 rounded shadow-xl flex flex-col gap-3">

//   <NavLink
//     to="/"
//     end
//     className={({ isActive }) =>
//       isActive
//         ? "block px-4 py-3 rounded-xl bg-white text-indigo-700 font-semibold shadow-md transition-all"
//         : "block px-4 py-3 rounded-xl text-blue-100 hover:bg-white/15 hover:text-white transition-all duration-200"
//     }   
//   >
//     📊 Dashboard
//   </NavLink>

//   <NavLink
//     to="/customers"
//     className={({ isActive }) =>
//       isActive
//         ? "block px-4 py-3 rounded-xl bg-white text-indigo-700 font-semibold shadow-md transition-all"
//         : "block px-4 py-3 rounded-xl text-blue-100 hover:bg-white/15 hover:text-white transition-all duration-200"
//     }
//   >
//     👥 Customers
//   </NavLink>

// </div>

//     )     
            
// }
// export default Sidebar;


import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-16 sm:w-20 lg:w-64 min-h-screen shrink-0 bg-gradient-to-b from-blue-700 via-blue-600 to-indigo-600 p-2 sm:p-3 lg:p-4 shadow-lg flex flex-col gap-3">

      {/* Dashboard Link */}
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
            isActive
              ? "bg-white text-blue-700 font-semibold shadow-md"
              : "text-blue-50 hover:bg-white/15 hover:text-white"
          }`
        }
      >
        <span>📊</span>
        <span>Dashboard</span>
      </NavLink>

      {/* Customers Link */}
      <NavLink
        to="/customers"
        className={({ isActive }) =>
          `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
            isActive
              ? "bg-white text-blue-700 font-semibold shadow-md"
              : "text-blue-50 hover:bg-white/15 hover:text-white"
          }`
        }
      >
        <span>👥</span>
        <span>Customers</span>
      </NavLink>

    </aside>
  );
};

export default Sidebar;
