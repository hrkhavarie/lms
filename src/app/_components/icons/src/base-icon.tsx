import { SVGAttributes } from "react";

export  const BaseIcon:React.FC<SVGAttributes<SVGElement>>= ({
    color= "currentColor" , 
    width= 24 , 
    height = 24 , 
    strokeWidth = '1.5' , 
    viewBox = '0 0 24 24' , 
    children, 
    ...rest     ,
}) =>{
    return
    <svg 
        xmlLang="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={viewBox}
        fill="none"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={color}
        {...rest}
    >
        {children}
    </svg>

}

export default BaseIcon;