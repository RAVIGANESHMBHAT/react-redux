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