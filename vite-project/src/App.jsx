import React, { useEffect } from 'react'
import Logic from './components/Logic'
import Comp from './components/Comp'
const App = () => {
  let API_KEY = "c34aaf8573ec41629a2120c21bf0f044"
  const URL = `https://newsapi.org/v2/everything?q=tesla&from=2023-09-16&sortBy=publishedAt&apiKey=${API_KEY}`
  const getdata = async()=>{
    const response =await fetch(URL)
    const data = response.json()
    console.log(data)

  }
  useEffect(()=>{
    getdata()
  },[])
return(
  <>
  <Logic/>
  <Comp/>
  </>
)

}

export default App
