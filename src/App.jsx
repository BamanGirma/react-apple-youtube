import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from '../src/Header/Header'
import Alert from '../src/Alert/Alert'
import FirstSection from './FirstSection/FirstSection'
import SecondSection from './SecondSection/SecondSection'
import ThridSection from './ThridSection/ThridSection'
import FourthSection from './FourthSection/FourthSection'
import FifthSection from './FifthSection/FifthSection'
import SixthSection from './SixthSection/SixthSection'
import YouTube from './YouTube/YouTube'
import Footer from './Footer/Footer'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
     <Header/>
     <Alert/>
     <FirstSection/>
     <SecondSection/>
     <ThridSection/>
     <FourthSection/>
     <FifthSection/>
     <SixthSection/>
     <YouTube/>
     <Footer/>
    </>
  )
}

export default App