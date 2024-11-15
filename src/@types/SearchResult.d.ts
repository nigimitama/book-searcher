type industryIdentifier = {
  type: string
  identifier: string
}

export type ImageLinks = {
  smallThumbnail: string
  thumbnail: string
}

export type volumeInfo = {
  title: string
  subtitle: string | undefined
  authors: Array<string>
  publisher: string | undefined
  publishedDate: string
  description: string
  industryIdentifiers: industryIdentifier
  previewLink: string
  imageLinks: ImageLinks | undefined
}

export type Item = {
  kind: string
  id: string
  etag: string
  selfLink: string
  volumeInfo: volumeInfo
}

export type ResultJson = {
  kind: string
  items: Array<Item>
}

export type SearchResultProps = {
  result: ResultJson
}
