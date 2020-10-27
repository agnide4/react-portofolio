import {GET_TABVALUE_REQUEST, GET_TABVALUE_SUCCESS, GET_TABVALUE_FAILURE} from "./constants"


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
          if(value){
              console.log("In actions", value)
              dispatch(getTabValueSuccess(value))
          }else{
              dispatch(getTabValueFailure())
          }
      }
}