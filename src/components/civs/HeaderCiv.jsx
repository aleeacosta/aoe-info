import { TbArrowLeft } from "react-icons/tb";
import { Link } from "react-router-dom";

const HeaderCiv = ({ icono, nombre, espe }) => {
  return (
    <>
        <header className='text-neutral-900 bg-yellow-100 pt-10 pb-4 md:pt-12 md:pb-10 px-4 md:px-24 lg:px-32 2xl:px-64 flex flex-col  gap-4 md:gap-6 relative'>
            <Link to={'/'}>
              <span className="flex items-center gap-1 hover:underline cursor-pointer absolute top-4">
                <TbArrowLeft size={20}/>
                Civilizaciones
              </span>
            </Link>
            <div className="flex gap-4 md:gap-6 items-center">
              <img className='w-20 md:w-[104px]' src={`./../iconosAoe/${icono}`} alt={nombre} />
              <div className='flex flex-col'>
                  <h1 className='text-4xl md:text-6xl font-bold'>{nombre}</h1>
                  <p className='text-base md:text-xl'>{espe}</p>
              </div>
            </div>
        </header>
    </>
  )
}

export default HeaderCiv