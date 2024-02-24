import { useState, FC } from 'react'
import { SearchForm } from './components/SearchForm'
import { SearchResult } from './components/SearchResult'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ResultJson } from './@types/SearchResult'
import Divider from '@mui/material/Divider'
import { Space } from './components/Space'



const App: FC = () => {
  const defaultResult: ResultJson = { kind: "", items: [] }
  const [result, setResult] = useState(defaultResult)
  const [query, setQuery] = useState("")

  return (
    <>
      <Header />
      <Space height="10px"/>
      <SearchForm setQuery={setQuery} setResult={setResult} />
      <SearchResult result={result} />
      <Space height="10px"/>
      <Divider />
      <Space height="10px"/>
      <Footer query={query} />
      <Space height="10px"/>
    </>
  )
}

export default App
