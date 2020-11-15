import {GET_TABVALUE_REQUEST, GET_TABVALUE_SUCCESS, GET_TABVALUE_FAILURE} from "./constants"
import {GET_PDFVALUE_REQUEST, GET_PDFVALUE_SUCCESS, GET_PDFVALUE_FAILURE} from "./constants"


const getTabValueSuccess = (value) => ({
    type: GET_TABVALUE_SUCCESS,
    payload: value
  })
  
  const getTabValueFailure = (error) => ({
    type: GET_TABVALUE_FAILURE,
    payload: error
  })

  export const getTabValue = (value) =>{
      return (dispatch, getState) => {
          dispatch({type: GET_TABVALUE_REQUEST})
          if(!null){
              console.log("In actions", value)
              dispatch(getTabValueSuccess(value))
          }else{
              dispatch(getTabValueFailure())
          }
      }
}

const getPdfValueSuccess = (value) => ({
    type: GET_PDFVALUE_SUCCESS,
    payload: value
  })
  
  const getPdfValueFailure = (error) => ({
    type: GET_PDFVALUE_FAILURE,
    payload: error
  })

  export const getPdfValue = (value) =>{
    return (dispatch, getState) => {
        dispatch({type: GET_PDFVALUE_REQUEST})
        if(!null){
            console.log("In actions", value)
            dispatch(getPdfValueSuccess(value))
        }else{
            dispatch(getTabValueFailure())
        }
    }
}