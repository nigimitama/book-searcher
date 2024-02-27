import React, { useEffect } from 'react'
import { ResultJson } from '../@types/SearchResult'
import OutlinedInput from '@mui/material/OutlinedInput'
import { outlinedInputClasses } from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles';
import { callApi } from '../modules/booksApi'


const SmallOutlinedInput = styled(OutlinedInput)({
  // input部分のpaddingを縮小
  [`& .${outlinedInputClasses.input}`]: {
    padding: "5px",
  },
})


type ResultProps = {
  setQuery: React.Dispatch<React.SetStateAction<string>>
  result: ResultJson
  setResult: React.Dispatch<React.SetStateAction<ResultJson>>
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>
}

export const SearchForm: React.FC<ResultProps> = ({ setQuery, result, setResult, setIsSearching }) => {

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

    setIsSearching(true)
    setQuery(query)
    const searchResult = await callApi(query)
    setIsSearching(false)
    setResult(searchResult)
  }

  return (
    <Stack
      direction="row"
      justifyContent="center"
      spacing={2}
      sx={{ margin: "5px 0 5px 0" }}
    >
      <SmallOutlinedInput
        id="searchForm"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        size="small"
        onKeyDown={e => searchBooks(e)}
        sx={{ width: "90%", fontSize: 14 }}
      />
    </Stack>
  )
}
