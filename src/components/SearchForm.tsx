import React from 'react'

type QueryProps = {
  setQuery: React.Dispatch<React.SetStateAction<string>>
}

export const SearchForm: React.FC<QueryProps> = ({ setQuery }) => {
  return (
    <>
      <input type="text" onChange={(event) => {setQuery(event.target.value)}}/>
    </>
  )
}