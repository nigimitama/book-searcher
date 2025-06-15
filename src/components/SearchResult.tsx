import React from "react"
import { ResultJson, Item } from "../@types/SearchResult"
import { BookInfo } from "./BookInfo"
import { CitationAccordion } from "./Citation"
import Divider from "@mui/material/Divider"
import { Alert, Stack } from "@mui/material"

const Books = ({ items }: { items: Item[] }): React.JSX.Element[] => {
  if (Object.entries(items).length == 0) return [<div key={0}></div>]

  const books: React.JSX.Element[] = []
  items.forEach((item) => {
    books.push(
      <div key={item.id} style={{ marginBottom: 10 }}>
        <BookInfo item={item} />
        <CitationAccordion item={item} />
      </div>
    )
  })
  return books
}

type SearchResultProps = { result: ResultJson }

export const SearchResult: React.FC<SearchResultProps> = ({ result }) => {
  return (
    <Stack divider={<Divider />}>
      {result.errorMessage ? (
        <div style={{ margin: "10px 10px 0px 10px" }}>
          <Alert severity="error">An error has occurred in the Google Books API</Alert>
          <div style={{ margin: "0px 10px" }}>
            <p>Please use Google Books directly instead.</p>
          </div>
        </div>
      ) : (
        <Books items={result.items} />
      )}
    </Stack>
  )
}
