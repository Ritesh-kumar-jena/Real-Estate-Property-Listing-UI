import React, { useState } from 'react'
import Navbar from './components/Navbar'
import AllRoutes from './components/AllRoutes'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
   <AllRoutes/>
   <Footer/>
    </>
  )
}

export default App
