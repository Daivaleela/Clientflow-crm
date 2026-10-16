const Button =({text,type ,onClick,className})=>{
    return(
        <button onClick={onClick} type={type} className={className}>{text}</button>
    )
}
export default Button;