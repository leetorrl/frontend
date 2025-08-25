import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import FirstPage from './pages/FirstPage';

function App() {
  return (
    <>
<Router>
  <div className="p-4">
    <nav className="space-x-4 mb-4">
      <Link to="/" className="text-blue-500">홈</Link>
      <Link to="/first" className="text-blue-500">FirstPage</Link>
    </nav>

    <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/first" element={<FirstPage/>} />
    </Routes>
  </div>
</Router>
    </>
  )
}

export default App
