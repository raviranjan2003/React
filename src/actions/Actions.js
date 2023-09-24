// export default (status)=>{
//     return {
//         type : "UPDATE_STATUS",
//         payload : status
//     }
// }

//USING createAction 
import { createAction } from "@reduxjs/toolkit";

export const createActionForChangeStatus = createAction("UPDATE_STATUS");