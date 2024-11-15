import React from "react"
import Button from "@mui/material/Button"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"
import Stack from "@mui/material/Stack"

type LinkToGoogleBooks = {
  query: string
}

export const LinkToGoogleBooks: React.FC<LinkToGoogleBooks> = ({ query }) => {
  const url = (query: string): string => {
    if (query == "") {
      return "https://books.google.com/"
    } else {
      const words = query.split(/\s+/)
      const q = words.join("+")
      return `https://www.google.com/search?tbm=bks&q=${q}`
    }
  }

  return (
    <a href={url(query)} target="_blank">
      <Button variant="text" size="small" startIcon={<OpenInNewIcon />}>
        Open Google Books
      </Button>
    </a>
  )
}

type FooterProps = {
  query: string
}

export const Footer: React.FC<FooterProps> = ({ query }) => {
  return (
    <Stack direction="row" justifyContent="center" spacing={2}>
      <LinkToGoogleBooks query={query} />
    </Stack>
  )
}
