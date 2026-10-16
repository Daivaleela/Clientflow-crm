
const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600
                    text-white shadow-lg px-6 py-4
                    flex items-center justify-between">

      {/* Logo / App Name */}
      <div>
        <h1 className="text-xl md:text-2xl font-bold tracking-wide">
          ClientFlow
        </h1>
        <p className="text-xs text-blue-100">
          Customer Management System
        </p>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        <div className="hidden sm:block text-right">
          <p className="text-sm font-semibold">Admin</p>
          <p className="text-xs text-blue-100">Administrator</p>
        </div>

        <div className="w-10 h-10 rounded-full bg-white text-blue-700
                        flex items-center justify-center font-bold
                        shadow-sm">
          A
        </div>
      </div>

    </nav>
  );
};

export default Navbar;  
