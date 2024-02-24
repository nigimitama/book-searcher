type industryIdentifier = {
  type: string,
  identifier: string
}

export type volumeInfo = {
  title: string,
  authors: Array<string>,
  publisher: string,
  publishedDate: string,
  description: string,
  industryIdentifiers: industryIdentifier,
  previewLink: string,
}

export type Item = {
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

export type SearchResultProps = {
  result: ResultJson
}
