import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Features } from './components/features'
import { Services } from './components/services'
import { Gallery } from './components/gallery'
import { Contact } from './components/contact'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
      <Features data={landingPageData.Features} />
      <Services data={landingPageData.Services} />
      <Gallery />
      <Contact data={landingPageData.Contact} />
    </div>
  )
}

export default App
