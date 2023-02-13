export enum ActionTypes  {
   textInput = "TEXT_INPUT",
   siginText = "SIGNIN_TEXT",
   reset = "RESET_STATE"
}
export  interface initialStateType {
    name: string,
    email:string,
    password:string
}
export interface ErrorType {
    message:string
}