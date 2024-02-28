import { Stack } from '@mui/material'
import { Item } from '../@types/SearchResult'
import Link from '@mui/material/Link'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'


export const BookSummary = (item: Item): JSX.Element => {
  const publishedDate = item.volumeInfo.publishedDate
  const publishedYear = (typeof (publishedDate) === "undefined") ? "" : publishedDate.slice(0, 4)
  const authors = (typeof (item.volumeInfo.authors) === "undefined") ? "" : item.volumeInfo.authors.join(", ")

  return (
    <ListItem>
      <Stack direction="row" spacing={2}>
        <img
          src={item.volumeInfo.imageLinks.smallThumbnail}
          style={{ width: "50px" }}
        />
        <ListItemText
          primary={
            <Link
              href={item.volumeInfo.previewLink}
              target="_blank"
              rel="noreferrer"
              sx={{ fontSize: "14px" }}
            >
              {item.volumeInfo.title}
            </Link>
          }
          secondary={
            <>
              {authors} - {item.volumeInfo.publisher} {publishedYear}
            </>
          }
          secondaryTypographyProps={{ sx: { fontSize: "12px" } }}
        />
      </Stack>
    </ListItem>
  )
}

