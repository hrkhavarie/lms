import { Size } from "../types/size.type";
import { ButtonProps, ButtonShape } from "./button.types";
import classNames from "classnames";

const sizeClasses:Record<Size , string>={
    tiny: 'btn-xs' , 
    small: 'btn-sm' , 
    normal: 'btn-md' ,
    large: 'btn-lg' ,
}
const shapeClasses:Record<ButtonShape , string> = {
    default: '', 
    wide: 'btn-wide' , 
    full: 'btn-wide',
    square: 'btn-square' , 



}
 export const  Button:React.FC<ButtonProps> = ({
    variant , 
    size = "normal" , 
    isDisabled = false, 
    isOutline=false, 
    shape="default",
    isLoading =false , 
    loadingTypes = "spinner",
    loadingText="در حال درخواست..." , 
    type="button",
    isLink=false , 
    animatedIcon=false,
    children,
    className,
    ...rest

}:ButtonProps) =>{
    const classes =  classNames(
    'btn' , 
    className,
    {'btn-outline' : isOutline} , 
    {'btn-link': isLink} , 
    {'animated-icon' : animatedIcon} ,
    {'pointer-envents-none opacity-80' : isLoading },
    {[`btn-${variant}`]:variant} , 
    {[`${sizeClasses[size]}`]:size} , 
    {[`${shapeClasses}`]: shape}




    )
    return(
        <button type={type} disabled={isDisabled} {...rest} className={classes}>
            {isLoading? loadingText : children}
        </button>
    )

}
