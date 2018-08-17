import React from 'react'
import './search.css'

function Search(props) {
  return(
    <form action="" className="Search" onSubmit={props.handleSubmit}>
      <input 
        ref={props.setRef}
        className="Search-input" 
        type="text"
        placeholder="Busca tu Video Favorito"
        name="search"
        onChange={props.handleChange}
        value={props.value}
      />
    </form>
  )
}


export default Search