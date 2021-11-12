import {ADD_TIME} from './../Constants/types';

// actions
export const addTime=(time)=>{
    return {
      type:ADD_TIME,
      payload:time
    };
  };