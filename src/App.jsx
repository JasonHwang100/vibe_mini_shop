import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* Routes 밖에 두어서 모든 화면 맨 아래에 나온다 */}
      <Footer />
    </>
  )
}

export default App
