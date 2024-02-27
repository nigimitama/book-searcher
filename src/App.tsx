import { useState, FC } from 'react'
import { SearchForm } from './components/SearchForm'
import { SearchResult } from './components/SearchResult'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ResultJson } from './@types/SearchResult'
import Divider from '@mui/material/Divider'
import { Space } from './components/Space'
import LinearProgress from '@mui/material/LinearProgress';



const App: FC = () => {
  const defaultResult: ResultJson = { kind: "", items: [] }
  const [result, setResult] = useState(defaultResult)
  const [query, setQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)

  return (
    <>
      <Header />
      { isSearching ? <LinearProgress /> : null }
      <Space height="10px"/>
      <SearchForm setQuery={setQuery} result={result} setResult={setResult} setIsSearching={setIsSearching} />
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
