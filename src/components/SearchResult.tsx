import React from 'react'


type industryIdentifier = {
  type: string,
  identifier: string
}

type volumeInfo = {
  title: string,
  authors: Array<string>,
  publisher: string,
  publishedDate: string,
  description: string,
  industryIdentifiers: industryIdentifier,
  previewLink: string,
}

type Item = {
  kind: string,
  id: string,
  etag: string,
  selfLink: string,
  volumeInfo: volumeInfo,
}

export type ResultJson = {
  kind: string,
  items: Array<Item>
}


const Book = (item: Item): JSX.Element => {
  const publishedDate = item.volumeInfo.publishedDate
  const publishedYear = (typeof(publishedDate) === "undefined") ? "" : publishedDate.slice(0, 4)
  const authors = (typeof(item.volumeInfo.authors) === "undefined") ? "" : item.volumeInfo.authors.join(", ")

  return (
    <div>
      <div>
        <a href={item.volumeInfo.previewLink}>{item.volumeInfo.title}</a>
      </div>
      <div>
        {authors} - {item.volumeInfo.publisher} {publishedYear}
      </div>
    </div>
  )
}


type SearchResultProps = {
  result: ResultJson
}

export const SearchResult: React.FC<SearchResultProps> = ({ result }) => {

  const filterResult = (result: ResultJson): JSX.Element[] => {
    if (Object.entries(result.items).length == 0) return [<></>]

    const items = result.items.map(item => Book(item))
    return items
  }

  return (
    <>
      {filterResult(result)}
    </>
  )
}