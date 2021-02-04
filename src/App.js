import { BrowserRouter as Router } from 'react-router-dom'

import './css/App.css'

import NavigationMenu from './components/NavigationMenu'
import PageContainer from './components/PageContainer'

function App() {
  return (
    <Router>
      <NavigationMenu />
      <PageContainer />
    </Router>
  )
}

export default App
