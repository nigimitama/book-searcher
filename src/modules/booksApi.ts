import { ResultJson } from "../@types/SearchResult"

export async function callApi(query: string): Promise<ResultJson> {
  const words = query.split(/\s+/)
  const q = words.join("+")
  const request = new Request(`https://www.googleapis.com/books/v1/volumes?q=${q}`)
  const result: ResultJson = await fetch(request).then((response) => {
    if (!response.ok) {
      console.log(`ERROR ${response}`)
      return {
        kind: "error",
        items: [],
        errorMessage: `${response.status} ERROR`,
      }
    }
    return response.json()
  })
  return result
}
