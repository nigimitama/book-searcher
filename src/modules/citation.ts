// import { Item } from '../@types/SearchResult'


// const formatAuthors = (item: Item): string => {
//   const authors = (item.volumeInfo.authors || [""])
//   return `${authors.slice(0, -1).join(", ")}, and ${authors.at(-1)}`
// }

// const formatPublishedYear = (item: Item): string => {
//   const publishedDate = item.volumeInfo.publishedDate
//   const publishedYear = (typeof (publishedDate) === "undefined") ? "" : publishedDate.slice(0, 4)
//   return publishedYear
// }

// export const genAPA = (item: Item): string => {
//   const authors = formatAuthors(item)
//   const publishedYear = formatPublishedYear(item)
//   const title = item.volumeInfo.title
//   const publisher = item.volumeInfo.publisher
//   return `${authors}. (${publishedYear}) ${title}. ${publisher}.`
// }


// export const genMLA = (item: Item): string => {
//   const authors = formatAuthors(item)
//   const publishedYear = formatPublishedYear(item)
//   const title = item.volumeInfo.title
//   const publisher = item.volumeInfo.publisher
//   return `${authors}. ${title}. (${publishedYear})  ${publisher}.`
// }
