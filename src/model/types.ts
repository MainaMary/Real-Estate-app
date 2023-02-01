export enum ActionTypes  {
   textInput = "TEXT_INPUT"
}
export  interface initialStateType {
    name: string,
    email:string,
    password:string
}
export interface ErrorType {
    message:string
}