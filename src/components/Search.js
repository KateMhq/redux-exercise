import React from "react";

function Search({handleQuery, query, handleSubmit, results}) {
  return (
  <section>
    <form onSubmit={()=>handleSubmit(query)}>
        <input value={query} onChange={(event) => handleQuery(event.target.value)}/>
        <input type='submit' />
    </form>
    <ul>
      <li key ={results[0].name}>{results[0].name}</li> 
    </ul>
  </section>
  )
}
export default Search;
