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
    if (Object.entries(result.items).length == 0) return [<div key={0}></div>]

    const items: JSX.Element[] = []
    result.items.forEach(item => {
      items.push(
        <div key={item.id}>
          <Divider />
          {BookInfo(item)}
        </div>
      )
    })
    return items
  }

  return (
    <>
      <List>{BookInfoItems(result)}</List>
    </>
  )
}