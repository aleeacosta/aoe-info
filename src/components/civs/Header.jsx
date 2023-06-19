import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
        <header className="px-4 flex justify-center drop-shadow-lg bg-yellow-500 text-neutral-100 py-6 text-4xl font-bold ">
            <Link className="flex items-center justify-start gap-4 w-fit hover:scale-105 transition ease-in-out" to={`/`}>
                <img className="w-8 sm:w-14 drop-shadow-md" src='./../iconosAoe/logoaoe.png' alt="logo_aoe" />
                <h1 className="text-2xl sm:w-32 drop-shadow-md">Age of Empires Info</h1> 
            </Link>      
        </header>
    </>
  )
}

export default Header