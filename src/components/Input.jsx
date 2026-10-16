const Input =({name,type,value,onChange,className,required})=>{
    return(
        <input
            name ={name}
            type={type}
            value={value}
            onChange={onChange}
            className={className}
            required={required}
        
        />
    )
}
export default Input;