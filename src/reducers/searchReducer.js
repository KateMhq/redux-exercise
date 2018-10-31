function searchReducer(state = {query:''}, action){
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
    return action.message;

    case 'RECEIVE_ERROR':
    return action.message

    default:
      return state;
  }
}

export default searchReducer;
