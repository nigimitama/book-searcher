import React from 'react'
import { Book } from './Book'
import { ResultJson } from '../@types/SearchResult'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'


type SearchResultProps = {
  result: ResultJson
}

export const SearchResult: React.FC<SearchResultProps> = ({ result }) => {

  const selectItems = (result: ResultJson): JSX.Element[] => {
    if (Object.entries(result.items).length == 0) return [<></>]

    const items: JSX.Element[] = []
    result.items.forEach(item => {
      items.push(Book(item))
      items.push(<Divider />)
    })
    items.pop() // 最後のDividerだけ消す
    return items
  }

  return (
    <>
      <List>{selectItems(result)}</List>
    </>
  )
}