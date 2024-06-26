import { ReactNode } from "react";
import { BaseComponent } from "../types/base-component";

export type BadgeProps = Omit<BaseComponent, 'isDisabled'> &{
    children: ReactNode,
}