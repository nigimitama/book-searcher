import React from 'react'
import { ResultJson, Item } from '../@types/SearchResult'
import { BookInfo } from './BookInfo'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'


type SearchResultProps = {
  result: ResultJson
}

export const SearchResult: React.FC<SearchResultProps> = ({ result }) => {

  const Books = (items: Item[]): JSX.Element[] => {
    if (Object.entries(items).length == 0) return [<div key={0}></div>]

    const books: JSX.Element[] = []
    items.forEach(item => {
      books.push(
        <div key={item.id}>
          <Divider />
          {BookInfo(item)}
        </div>
      )
    })
    return books
  }

  return (
    <List>
      {Books(result.items)}
    </List>
  )
}
