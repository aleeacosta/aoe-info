import CivsPage from "./pages/civs/CivsPage"
import CivsDetail from "./components/civs/CivsDetail"
import {Routes, Route} from 'react-router-dom'
import Header from "./components/civs/Header"

function App() { 

  return (
    <>      
      <Header />
      <Routes>
        <Route path='/' element={<CivsPage />}  />
        <Route path='/:civilizacion' element={<CivsDetail/>}  />        
      </Routes>      
    </>
  )
}

export default App
