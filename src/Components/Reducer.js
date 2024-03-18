const initialState = {
    loggedIn: false,
    error: ''
  }
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        if (action.payload.email === 'blabla@bla.bla' && action.payload.password === 'blabla') {
          return { ...state, loggedIn: true, error: '' }
        } else {
          return { ...state, loggedIn: false, error: 'oooops' }
        }
      default:
        return state
    }
  }
  
  export default authReducer
  