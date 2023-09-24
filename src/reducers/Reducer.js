import { createReducer } from "@reduxjs/toolkit"

const initialState = {
  name : "Ravi",
  age : 20,
  status : "Coder"
}
// export default (state = initialState,action) => {
//     if(action.type == "UPDATE_AGE"){
//         return {
//             ...state,
//             age : action.payload
//         }
//     }
//   return state;
// }


// creating reducer using createReducer provided by @reduxjs/toolkit
export default createReducer(initialState,(builder)=>{
  builder.addCase("UPDATE_AGE",(state,action)=>{
    state.age = action.payload;
  })
  builder.addCase("UPDATE_NAME",(state,action)=>{
    state.name = action.payload;
  })
  builder.addCase("UPDATE_STATUS",(state,action)=>{
    state.status = action.payload;
  })
})