import React, { useState } from 'react'




import Page1 from './pages/Page1'
import Model from './components/Model'
import Header from './components/Header'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'

const App = () => {

  const [showModel,setShowModel] = useState(false)

  return (
    <>
      <Header setShowModel={setShowModel}/>
      <Page1 />
      <Page2 />
      <Page3/>
      <Page4/>
      { showModel && <Model onClose={()=> setShowModel(false)}/> }


    </>
  )
}

export default App