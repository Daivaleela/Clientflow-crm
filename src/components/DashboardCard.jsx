const DashboardCard =({title,value,color,textColor,icon })=>{
    return(
        <div className={`rounded-xl p-5 shadow-sm ${color}`}>
            <p className={`text-sm font-medium ${textColor}`}>{title}</p>
            <h3 className="text-3xl font-bold text-gray-800 mt-2">
                {value}
            </h3>
            <div className={`text-3xl ${textColor}`}>
                {icon}
            </div>
        </div>
       
    )

}   
export default DashboardCard;