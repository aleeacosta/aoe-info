import CivsPage from "./pages/civs/CivsPage"
import CivsDetail from "./components/civs/CivsDetail"
import {Routes, Route} from 'react-router-dom'

function App() { 

  return (
    <>
      <div className="px-5 md:px-24 lg:px-32 2xl:px-64 drop-shadow-lg flex items-center justify-start bg-orange-600 text-neutral-100 py-6 text-4xl font-bold gap-8">
        <img className="w-12" src='./../iconosAoe/logoaoe.png' alt="logo aoe" />
        <h1 className="">Age of Empires Info</h1>       
      </div>
      <Routes>
        <Route path='/' element={<CivsPage />}  />
        <Route path='/:civilizacion' element={<CivsDetail/>}  />        
      </Routes>      
    </>
  )
}

export default App
