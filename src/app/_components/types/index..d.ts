export type BaseComponent = {
    isDisabled?:boolean;
    className?:string;
    variant?:Variant;
    size?: Size;
}

export type Size = "tiny" | "small" | "normal" | "large"

export type Variant = 
    "neutral" 
    | "primary"
    | "secondary"
    | "accent"
    | "ghost"
    | "info"
    | "success"
    | "warning"
    | "error"

