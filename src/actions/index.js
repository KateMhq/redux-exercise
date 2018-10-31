export function handleQuery(searchQuery) {
  return {
    type: "UPDATE_QUERY",
    query: searchQuery
  };
}

export function displayResults(results) {
  if (results.length == 0){
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

export function handleSubmit(query) {
  return function(dispatch) {
    fetch(`https://swapi.co/api/people/?search=${query}`)
      .then(response => response.json())
      .then(results => {
        dispatch(displayResults(results.results));
        dispatch(handleQuery(''))
      })
      .catch(error => dispatch(receiveError(error.message)))

  };

}
