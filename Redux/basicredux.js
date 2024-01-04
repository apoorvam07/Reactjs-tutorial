const redux =require('redux');
const initial_value={
  counter:0
}

const reducer=(store=initial_value,action)=>{
return {counter:store.counter+1};
}
const store=redux.createStore(reducer);

const subscriber=()=>{
  const state=store.getState();

}
store.subscriber(subscriber);
store.dispatch({type:increm})