import classNames from "classnames";
import { PriceProps } from "./price.types";
import { Size } from "../types/size.type";

const sizeClasses:Record<Size , {textSize: string;svgSize:number}> = {
    tiny: {textSize: 'text-sm', svgSize: 16},
    small: {textSize: 'text-base', svgSize: 18},
    normal: {textSize: 'text-lg', svgSize: 20},
    large: {textSize: 'text-xl', svgSize: 22},
    
}

export const Price: React.FC<PriceProps> = ({
    size= "normal",
    price,
    text="رایگان ",
    className ,
})=>{
    
    return(
        <>
        {
            price != null &&  price > 0 ? (
                <span className={`flex items-center font-bold gap-1 dark:text-white/90 ${sizeClasses[size].textSize}`}>
                    {price.toLocaleString()}
                </span>
            ):
            ""
        }
        </>
    )
}