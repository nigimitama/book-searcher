import React from 'react'
import { ResultJson } from '../@types/SearchResult'
import { BookInfo } from './BookInfo'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'


type SearchResultProps = {
  result: ResultJson
}

export const SearchResult: React.FC<SearchResultProps> = ({ result }) => {

  const BookInfoItems = (result: ResultJson): JSX.Element[] => {
    if (Object.entries(result.items).length == 0) return [<></>]

    const items: JSX.Element[] = []
    result.items.forEach(item => {
      items.push(<Divider />)
      items.push(BookInfo(item))
    })
    // items.pop() // 最後のDividerだけ消す
    return items
  }

  return (
    <>
      <List>{BookInfoItems(result)}</List>
    </>
  )
}