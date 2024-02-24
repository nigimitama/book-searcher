import { Item } from '../@types/SearchResult'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'


export const Book = (item: Item): JSX.Element => {
  const publishedDate = item.volumeInfo.publishedDate
  const publishedYear = (typeof (publishedDate) === "undefined") ? "" : publishedDate.slice(0, 4)
  const authors = (typeof (item.volumeInfo.authors) === "undefined") ? "" : item.volumeInfo.authors.join(", ")

  return (
    <ListItem sx={{ "fontSize": "10px" }}>
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

