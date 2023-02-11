import { ActionTypes,initialStateType } from "../model/types";
interface IProps {
    key:string;
    value:string
}
interface Props {
    type:string;
    payload: {
        key:string;
        value:string
    }
}


export const formReducer = (state:any, action:Props):Props => {
    const {type, payload} = action
    switch (type) {
      case ActionTypes.textInput:
        return {
          ...state,
          [payload.key]: payload.value,
        };
      case ActionTypes.siginText:
        return {
          ...state,
          [payload.key]: payload.value
        }
      default:
        throw new Error(`Unknown action type: ${type}`);
    }
  };