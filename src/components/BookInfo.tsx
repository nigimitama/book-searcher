import { Stack } from '@mui/material'
import { Item } from '../@types/SearchResult'
import Link from '@mui/material/Link'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { formatTitle, formatPublishedYear } from '../modules/citation'


type BookInfoProps = {
  item: Item
}

export const BookInfo = ({ item }: BookInfoProps): JSX.Element => {
  const publishedYear = formatPublishedYear(item)
  const title = formatTitle(item)
  const authors = (typeof item.volumeInfo.authors === "undefined") ? "" : item.volumeInfo.authors.join(", ")
  const imageUrl = (typeof item.volumeInfo.imageLinks === "undefined") ? "images/noimage.png" :item.volumeInfo.imageLinks.smallThumbnail

  return (
    <ListItem>
      <Stack direction="row" spacing={2}>
        <img
          src={imageUrl}
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
              {title}
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
