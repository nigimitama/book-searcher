import React from "react"
import { ResultJson, Item } from "../@types/SearchResult"
import { BookInfo } from "./BookInfo"
import { CitationAccordion } from "./Citation"
import Divider from "@mui/material/Divider"
import { Stack } from "@mui/material"

type SearchResultProps = {
  result: ResultJson
}

export const SearchResult: React.FC<SearchResultProps> = ({ result }) => {
  const Books = (items: Item[]): JSX.Element[] => {
    if (Object.entries(items).length == 0) return [<div key={0}></div>]

    const books: JSX.Element[] = []
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

  return <Stack divider={<Divider />}>{Books(result.items)}</Stack>
}
