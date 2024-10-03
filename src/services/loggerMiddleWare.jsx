export const LoggerMiddleWare = (store) => (next) => (action) => {
    console.log('Dispatching',action);
    console.log("State before action",store.getState());
    // if(action.type==='todo/addTodo'){
    //     action.payload=action.payload+'!!!';
    // }
    const res=next(action)//send action for execute
    console.log(res);
    return res;
}