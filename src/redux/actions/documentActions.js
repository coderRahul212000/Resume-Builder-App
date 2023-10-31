import * as documentActions from './actions'
import { v4 as uuidv4 } from 'uuid';

export const setSkin = (skindCd) =>{
    return{
        type:documentActions.SET_SKIN,
        payload:{
            id:uuidv4(),
            skindCd:skindCd
        }
    }
}

export const updateSkin = (skindCd) =>{
    return{
        type:documentActions.UPDATE_SKIN,
        payload:{
            skindCd:skindCd
        }
    }
}