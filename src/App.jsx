import CivsPage from "./pages/civs/CivsPage"
import CivsDetail from "./components/civs/CivsDetail"
import {Routes, Route} from 'react-router-dom'

function App() { 

  return (
    <>
      <div className="drop-shadow-lg">
        <h1 className="flex justify-center bg-orange-600 text-neutral-100 py-12 text-4xl font-bold">Age of Empires II DE</h1>       
      </div>
      <Routes>
        <Route path='/' element={<CivsPage />}  />
        <Route path='/:civilizacion' element={<CivsDetail/>}  />        
      </Routes>      
    </>
  )
}

export default App
