export function handleQuery(searchQuery) {
  return {
    type: "UPDATE_QUERY",
    query: searchQuery
  };
}

export function displayResults(results) {
  if (results.length === 0){
    return {
      type: "DISPLAY_ERROR",
      message: {error:'Results not found'}
    };
  }
  return {
    type: "DISPLAY_RESULTS",
    results: results
  };
}

export function receiveError(msg){
  return{
    type:'RECEIVE_ERROR',
    message:msg
  }
}

export function handleSelection(event){
  console.log(event)
  return {
    type: "SELECT_TYPE",
    selection: event
  };

}

export function handleSubmit() {

  return function(dispatch, getState) {
    const {query,selection}=getState().searchReducer; //values are stored in the state. can get them here directly

    fetch(`https://swapi.co/api/${selection}/?search=${query}`)
      .then(response => response.json())
      .then(body => {
        console.log(body)
        dispatch(displayResults(body.results));
        dispatch(handleQuery(''))
      })
      .catch(error => {
        console.log(error);
        dispatch(receiveError(error))}
      )

  };

}
