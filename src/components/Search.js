import React from "react";

function Search({query, results, err, selection,handleSubmit,handleQuery,  handleSelection}) {
  //console.log(query);
  return (
  <section>
    <form onSubmit={(event)=>{
      event.preventDefault();
      handleSubmit();
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
