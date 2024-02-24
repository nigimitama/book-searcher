import React from 'react'
import { Item, ResultJson } from '../@types/SearchResult'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'


const Book = (item: Item): JSX.Element => {
  const publishedDate = item.volumeInfo.publishedDate
  const publishedYear = (typeof(publishedDate) === "undefined") ? "" : publishedDate.slice(0, 4)
  const authors = (typeof(item.volumeInfo.authors) === "undefined") ? "" : item.volumeInfo.authors.join(", ")

  return (
    <ListItem sx={{"fontSize": "10px"}}>
      <ListItemText
        primary={
          <a href={item.volumeInfo.previewLink} target="_blank">
            {item.volumeInfo.title}
          </a>
        }
        secondary={
          <>
            {authors} - {item.volumeInfo.publisher} {publishedYear}
          </>
        }
      />
    </ListItem>
  )
}


type SearchResultProps = {
  result: ResultJson
}

export const SearchResult: React.FC<SearchResultProps> = ({ result }) => {

  const selectItems = (result: ResultJson): JSX.Element[] => {
    if (Object.entries(result.items).length == 0) return [<></>]

    const items: JSX.Element[] = []
    result.items.forEach(item => {
      items.push(Book(item))
      items.push(<Divider/>)
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