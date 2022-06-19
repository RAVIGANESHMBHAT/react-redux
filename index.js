const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'

//action creater
function orderCake(qty = 1) {
  return {
    type: CAKE_ORDERED,
    payload: qty,
  };
}

function restockCake(qty = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty
    }
}

const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
          };
      case CAKE_RESTOCKED:
          return {
              ...state,
              numOfCakes: state.numOfCakes + action.payload
          }
    default:
      return state;
  }
};

const store = createStore(reducer);

console.log("Initil state = ", store.getState())

const unsubscribe = store.subscribe(() => {
  console.log("Update state = ", store.getState());
});

// store.dispatch(orderCake(1));
// store.dispatch(orderCake(2));
// store.dispatch(orderCake(1));

// store.dispatch(restockCake(4))

const actions = bindActionCreators({ orderCake, restockCake }, store.dispatch)
actions.orderCake(1)
actions.orderCake(2);
actions.orderCake(1);

actions.restockCake(4)


unsubscribe();
