import { ButtonHTMLAttributes } from "react";
import { BaseComponent } from "../types/base-component";
import { LoadingBehavior } from "../types/loading-behavior.types";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & BaseComponent & LoadingBehavior & {
    isOutline?: boolean ; 
    isLink?: boolean;
    animatedIcon?: boolean;
    shape?:ButtonShape;
}

export  type ButtonShape = "default" | "wide" | "full" | "square" ;