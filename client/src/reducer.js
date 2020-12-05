import {GET_TABVALUE_REQUEST, GET_TABVALUE_SUCCESS, GET_TABVALUE_FAILURE} from "./constants"
import {GET_PDFVALUE_REQUEST, GET_PDFVALUE_SUCCESS, GET_PDFVALUE_FAILURE} from "./constants"

export const initialState = {
    tabValue: 0,
    pdfValue:"",
    mStatus: false,
    error:""
};


export default (state = initialState, action) => {
  switch(action.type){
    case GET_TABVALUE_REQUEST:
      return{...state, tabValue: 0, error: null}
    case GET_TABVALUE_SUCCESS:
      return{...state, tabValue: action.payload, error: null}
    case GET_TABVALUE_FAILURE:
      return{...state, error: action.payload}
      case GET_PDFVALUE_REQUEST:
        return{...state, pdfValue: "", error: null}
      case GET_PDFVALUE_SUCCESS:
        return{...state, pdfValue: action.payload, error: null}
      case GET_PDFVALUE_FAILURE:
        return{...state, error: action.payload}
      
        



    default:
        return state
  }


}
  