function searchReducer(state = {query:'',selection:'people'}, action){
  switch (action.type) {

    case 'UPDATE_QUERY':
    return Object.assign({},state, {
      query:action.query
    });

    case 'DISPLAY_RESULTS':
    return Object.assign({}, state, {
      results:action.results
    });

    case 'DISPLAY_ERROR':
    return Object.assign({}, state, {message: action.message});

    case 'RECEIVE_ERROR':
    return Object.assign({}, state, {message: action.message});

    case 'SELECT_TYPE':
      return Object.assign({}, state, {selection: action.selection});

    default:
      return state;
  }
}

export default searchReducer;
