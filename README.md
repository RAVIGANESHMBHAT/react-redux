## Redux

#### Redux is a predictable state container for JavaScript apps. Reduct is not tied to React, but to JavaScript.

### Redux Toolkit
#### Redux toolkit is the official , opinionated, batteries-included toolset for efficient Redux development.

### When to use redux in my application?
* You have large amount of application state that are needed in many places in app
* The app state is updated frequently over time
* The logic to update that state may be complex
* The app has a medium or large-sized codebase, and might be worked on by many people

### This tutorial structure
* Learn Redux
* Learn Ridux Toolkit
* Learn React Redux

### Three core concepts in Redux
|Cake Shop Scenario|Redux| Purpose|
|------------------|-----|--------|
|Shop |Store |Holds the state of your application | 
|Cake ordered |Action |Describes what happened | 
|Shopkeeper |Reducer |Ties the store and actions together |

### Three principles of Redux
* The global state of your application is stored as an object inside a single store.
* The only way to change the state is to dispatch an action, an object that describes what happened.
* To specify how state tree is updated based on acyions, you write pure reducers.
![image](https://user-images.githubusercontent.com/41186067/174474835-efc351bf-8707-4baf-b6ae-8575b21d0ee7.png)

### Redux store responsibilities
* Holds application state
* Allows access to state via getState()
* Allows state to be updated via dispatch(action)
* Registers listeners via subscribe(listener)
* Handles unregistering of listeners via the function returned by subscriber(listener)


### Immer library

#### When we need to create the copy of object, we usually use spread operator and update the required attribute of the object with new values. But it will be difficult with nested objects. So, we can use the Immer library.

### Middleware

#### It is the suggested way to extend Redux with custom functionality.
#### Provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.
#### Use middleware for logging, crash reporting, performance asynchronous tasks etc.

### Async Actions

#### ...

### Redux Thunk Middleware

#### Async action creators are -> axios: Request to an API endpoint, redux-thunk: define async action creator
#### The Thunk middleware allows the action creator to return the function instead of action.

## Redux Toolkits

### Redux concerns
* Redux required too much boilerplate code (Action, Action object, Action creator, Switch statement in a reducer)
* A lot of other packages have to be installed to work with redux (EG: For async actions, we need Redux-Thunk, For handling nested state updates, we need Immer, ...)
* Need to improve the developer experience for redux.

### Apply Middleware with redux toolkit
#### By default the configureStore function adds some middlewares to redux store automatically. So, when we add some new middleware, we need to concate our middleware with getDefaultMiddleware()

### In Redux, performing one operation in one reducer when action happened in the states of other reducer
#### In the current commit, When a cake is ordered, an icecream will be given for free. So, whenever the CAKE_ORDERED action happens, the numOfIcecreams must be decremented by one. A particular reducer can update only it's portion of the application states, but it can respond to any action dispatched in the application. So, decrementing numOfIcecreams can only be done in the iceCreamReducer, but it can respond to the CAKE_ORDERED action.
#### This scenario can be handled by using Extra Reducers in the Redux Toolkit

### In Redux Toolkit, using the Extra Reducers

#### These are the reducers created apart from the reducers created by createSlice.

### Async Thunks

#### ...

### useSelector Hook
#### To read data from the redux store in a react component, we use useSelector hook. It is a kind of wrapper around the store.getState()

### useDispatch Hook

#### Used to dispatch an action with React redux

### Redux Devtools
#### Chrome extension: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related?hl=en


