import { ActionTypes,initialStateType } from "../model/types";
interface Props {
    type:string;
    payload:string;
}


export const formReducer = (state:initialStateType,action:Props) =>{
    const {type, payload} = action
    switch(type){
        case ActionTypes.AddName:
            return{...state, name:state.name}
            default:
                throw new Error(`Unknown action type ${type}`)
    }

}