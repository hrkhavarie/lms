import { BaseComponent } from "../types/base-component";


export type PriceProps = Omit<BaseComponent , 'isDiabled' | 'variant'> & ( {
    price? : number ;
    text?:string;
})