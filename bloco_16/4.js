// Criando um reducer que aceita actions de tipos distintos

const defaultState = {
    authenticated: false
  };
  
  const authReducer = (state = defaultState, action) => {
    // Change code below this line
    switch (action.type) {
      case 'LOGIN':
        return {
          authenticated: true
        }
      case 'LOGOUT':
        return {
          authenticated: false
        }
      default:
        return {authenticated: false}
  }
    // Change code above this line
  };
  
  const store = Redux.createStore(authReducer);
  
  const loginUser = () => {
    return {
      type: 'LOGIN'
    }
  };
  
  const logoutUser = () => {
    return {
      type: 'LOGOUT'
    }
  };