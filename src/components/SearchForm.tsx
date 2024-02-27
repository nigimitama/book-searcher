import React, { useEffect } from 'react'
import { ResultJson } from '../@types/SearchResult'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import Stack from '@mui/material/Stack'


async function callApi(query: string): Promise<ResultJson> {
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


type ResultProps = {
  setQuery: React.Dispatch<React.SetStateAction<string>>
  result: ResultJson
  setResult: React.Dispatch<React.SetStateAction<ResultJson>>
}

export const SearchForm: React.FC<ResultProps> = ({ setQuery, result, setResult }) => {

  /* 画面のロード時にinputがフォーカスされてすぐに検索できる状態にする */ 
  const FocusInputOnLoad = () => {
    if (result.items.length != 0) return

    const input = document.getElementById("searchForm") as HTMLInputElement
    input.focus()
  }

  useEffect(() => {
    FocusInputOnLoad()
  }, [])


  /* Enterが押されたら検索を実行する */
  async function searchBooks(event: React.KeyboardEvent) {
    if (event.key != "Enter") return;

    const input = document.getElementById("searchForm") as HTMLInputElement
    const query = input.value
    if (query === "") return;

    setQuery(query)
    const searchResult = await callApi(query)
    setResult(searchResult)
  }

  return (
    <Stack direction="row" justifyContent="center" spacing={2}>
      <OutlinedInput
        id="searchForm"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        size="small"
        onKeyDown={e => searchBooks(e)}
        sx={{ "width": "90%" }}
      />
    </Stack>
  )
}
