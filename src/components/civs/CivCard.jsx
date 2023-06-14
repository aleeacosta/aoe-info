
import { Link } from 'react-router-dom'

const CivCard = ({name, icono, espe}) => {
  return (

    <Link className='m-6' to={`/${name}`}>
      <div className='shadow-[0_10px_15px_0_rgba(0,0,0,0.15)] text-neutral-900 mt-12 bg-amber-100 border-amber-300 border h-[150px] w-[280px] flex flex-col items-center justify-center cursor-pointer rounded-[30px] relative transition ease-in-out hover:-translate-y-1 hover:scale-105' >
        <img className='absolute top-[-50px]' src={`./../iconosAoe/${icono}`} alt={name} />
        <h4 className='font-bold text-4xl  mt-10'>{name}</h4>
        <p className='text-center font-light'>{espe}</p>
      </div>
    </Link>
  )
}

export default CivCard