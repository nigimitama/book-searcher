import { Item } from '../@types/SearchResult'
import Cite from 'citation-js'
import human from 'humanparser'


export const createCite = (item: Item, type: string): string => {
  const csl = convertItemToCSL(item)
  const cite = new Cite(csl)
  return cite.format('bibliography', {
    format: 'text',
    template: type // "apa", 
  }).trim()
}

type minimumCSL = {
  author: authorInfo[],
  issued: { 'date-parts': Array<string[]> },
  title: string,
  publisher: string | undefined
}

const convertItemToCSL = (item: Item): minimumCSL => {
  // Google Booksは姓名が分かれていないのでこうなる
  const author = (item.volumeInfo.authors || [""]).map(author => genAuthorInfo(author))
  const publishedYear = formatPublishedYear(item)

  return {
    author: author,
    issued: { 'date-parts': [[publishedYear]] },
    title: item.volumeInfo.title,
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

const formatPublishedYear = (item: Item): string => {
  const publishedDate = item.volumeInfo.publishedDate
  const publishedYear = (typeof (publishedDate) === "undefined") ? "" : publishedDate.slice(0, 4)
  return publishedYear
}
