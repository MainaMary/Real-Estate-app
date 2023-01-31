import { useReducer } from "react";
import { formReducer } from "./formReducer";
const initialState = {
    name:'',
    email: ''
}
const [state, dispatch]:any = useReducer<any>(formReducer, initialState)