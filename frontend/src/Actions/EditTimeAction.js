import {EDIT_TIME} from './../Constants/types';

// actions
export const editTime=(time)=>{
    return {
      type:EDIT_TIME,
      payload:time
    };
  };