import CivsPage from "./pages/civs/CivsPage"
import CivsDetail from "./components/civs/CivsDetail"
import {Routes, Route, Link} from 'react-router-dom'

function App() { 

  return (
    <>
      <header className="px-4 sm:px-8 md:px-24 lg:px-32 2xl:px-64 drop-shadow-lg bg-yellow-500 text-neutral-100 py-6 text-4xl font-bold ">
        <Link className="flex items-center justify-start gap-4 w-fit hover:scale-105 transition ease-in-out" to={`/`}>
          <img className="w-8 sm:w-14 drop-shadow-md" src='./../iconosAoe/logoaoe.png' alt="logo aoe" />
          <h1 className="text-2xl sm:w-32 drop-shadow-md">Age of Empires Info</h1> 
        </Link>      
      </header>
      <Routes>
        <Route path='/' element={<CivsPage />}  />
        <Route path='/:civilizacion' element={<CivsDetail/>}  />        
      </Routes>      
    </>
  )
}

export default App
