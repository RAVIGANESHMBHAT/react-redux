const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions

//console.log('Initial state = ', store.getState())
const unsubscribe = store.subscribe(() => {
   // console.log("Updated state = ", store.getState());
})

store.dispatch(cakeActions.ordered(1))
store.dispatch(cakeActions.ordered(2));
store.dispatch(cakeActions.ordered(1));

store.dispatch(cakeActions.restocked(3));
store.dispatch(cakeActions.restocked(1));

store.dispatch(icecreamActions.ordered(1))
store.dispatch(icecreamActions.ordered(2));
store.dispatch(icecreamActions.restocked(3))

unsubscribe()