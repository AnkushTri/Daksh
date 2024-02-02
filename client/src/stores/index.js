import { createStore} from "redux"


const INITIAL_VALUE={
    counter:20
}

const counterReducer = (store = INITIAL_VALUE,action)=>{
    if(action.type==="ADD"){
        return {counter:store.counter+action.payload.value}
    }else if(action.type==="SUB"){
       return {counter:store.counter-action.payload.value};
    }
    return store
}

// const counterReducer = (store = INITIAL_VALUE,action)=>{
//     return store;
// }

const counterStore = createStore(counterReducer)


export default counterStore