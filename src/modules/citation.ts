import { Item } from '../@types/SearchResult'
import Cite from 'citation-js'
import human from 'humanparser'


export const createCite = (item: Item, type: string): string => {
  const csl = convertItemToCSL(item)
  const cite = new Cite(csl)
  return cite.format('bibliography', {
    format: 'text',
    template: type // "apa"など
  }).trim()
}

type minimumCSL = {
  author: authorInfo[],
  issued: { 'date-parts': Array<string[]> },
  title: string,
  publisher: string | undefined
}

const convertItemToCSL = (item: Item): minimumCSL => {
  const author = (item.volumeInfo.authors || [""]).map(author => genAuthorInfo(author))
  const title = formatTitle(item)
  const publishedYear = formatPublishedYear(item)

  return {
    author: author,
    issued: { 'date-parts': [[publishedYear]] },
    title: title,
    publisher: item.volumeInfo.publisher
  }
}

type authorInfo = {
  given: string | undefined,
  family: string | undefined,
  affiliation: string[]
}

const genAuthorInfo = (fullName: string) => {
  const parts = human.parseName(fullName)
  return {
    given: [parts.firstName, parts.middleName].join(" "),
    family: parts.lastName,
    suffix: parts.suffix,
    affiliation: []
  }
}

export const formatTitle = (item: Item) => {
  if (typeof item.volumeInfo.subtitle === "undefined") {
    return item.volumeInfo.title
  } else {
    return `${item.volumeInfo.title}: ${item.volumeInfo.subtitle}`
  }
}

export const formatPublishedYear = (item: Item): string => {
  const publishedDate = item.volumeInfo.publishedDate
  const publishedYear = (typeof (publishedDate) === "undefined") ? "" : publishedDate.slice(0, 4)
  return publishedYear
}


export const citeFileUrl = (bookId: string, format: string) => {
  return `https://books.google.com/books?id=${bookId}&output=${format}`
}
