import { ReactNode } from "react";
export enum ActionTypes  {
   textInput = "TEXT_INPUT",
   siginText = "SIGNIN_TEXT",
   reset = "RESET_STATE",
   login ="LOG_IN",
   logout= "LOG_OUT"
}
export  interface initialStateType {
    name: string,
    email:string,
    password:string
}
export interface ErrorType {
    message:string
}
export interface ListType {
    description:string;
    address: string;
    price: number
}
export interface ChildrenProps {
    children: ReactNode
}
export const USER ="user"