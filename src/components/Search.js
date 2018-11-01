import React from "react";

function Search({handleQuery, query, handleSubmit, results, err, selection,handleSelection}) {
  //console.log(query);
  return (
  <section>
    <form onSubmit={(event)=>{
      event.preventDefault();
      handleSubmit(query, selection);
    }}>
    <select onChange={(event)=>handleSelection(event.target.value)}>
      <option value="people">People</option>
      <option  value="planets">Planets</option>
      <option  value="species">Species</option>
    </select>
        <input value={query} onChange={(event) => handleQuery(event.target.value)}/>
        <input type='submit' />
    </form>
    <ul>
      <li>{results ? results[0].name : err ? err.error: null}</li>
    </ul>
  </section>
  )
}
export default Search;
