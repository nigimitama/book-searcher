import React from 'react'
import { ResultJson } from './SearchResult.tsx'


type ResultProps = {
  setResult: React.Dispatch<React.SetStateAction<ResultJson>>
}

export const SearchForm: React.FC<ResultProps> = ({ setResult }) => {

  async function callApi(query: string) {
    console.log(`query=${query}`);
    const words = query.split(/\s+/)
    const q = words.join("+")
    const request = new Request(`https://www.googleapis.com/books/v1/volumes?q=${q}`)
    const result = await fetch(request)
      .then((response) => {
        if (!response.ok) {
          console.log(`ERROR ${response}`)
        }
        return response.json()
      })
    return result
  }

  async function searchBooks(event: React.KeyboardEvent) {
    // Enterが押されたら検索を実行する
    if (event.key != "Enter") return;

    const form = document.getElementById("searchForm") as HTMLInputElement
    const searchResult = await callApi(form.value)
    console.log(searchResult)
    setResult(searchResult)
  }
  return (
    <>
      <input id="searchForm" type="text" onKeyDown={e => searchBooks(e)} />
    </>
  )
}