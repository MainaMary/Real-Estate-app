export enum ActionTypes  {
    AddName ="ADD_NAME",
    AddEmail = "ADD_EMAIL",
    AddPassword="ADD_PASSWORD"
}
export  interface initialStateType {
    name: string,
    email:string,
    password:string
}