export enum ActionTypes  {
   textInput = "TEXT_INPUT",
   siginText = "SIGNIN_TEXT"
}
export  interface initialStateType {
    name: string,
    email:string,
    password:string
}
export interface ErrorType {
    message:string
}