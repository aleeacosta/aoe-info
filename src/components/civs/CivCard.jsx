
import { Link } from 'react-router-dom'

const CivCard = ({name, icono, espe}) => {
  return (

    <Link to={`/civs/${name}`}>
      <div className='p-4 bg-yellow-200 h-full flex flex-col items-center justify-center cursor-pointer rounded-lg' >
        <img src={`./../iconosAoe/${icono}`} alt={name} />
        <h4>{name}</h4>
        <p className='text-center'>{espe}</p>
      </div>
    </Link>
  )
}

export default CivCard