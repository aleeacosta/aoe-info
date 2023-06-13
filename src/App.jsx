import CivsPage from "./pages/civs/CivsPage"
import CivsDetail from "./components/civs/CivsDetail"
import {Routes, Route} from 'react-router-dom'

function App() { 

  return (
    <>       
      <Routes>
        <Route path='/' element={<h1 className="flex justify-center text-gray-800 py-12 text-4xl font-bold">AOE Info</h1>}  />
        <Route path='/civs' element={<CivsPage />}  />
        <Route path='/civs/:civilizacion' element={<CivsDetail/>}  />
      </Routes>      
    </>
  )
}

export default App
