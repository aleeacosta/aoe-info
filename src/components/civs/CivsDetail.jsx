import { getCiv } from '../../services/civs-api';
import { useParams } from 'react-router-dom'

const UserDetail = () => {

    const { civilizacion } = useParams()

    console.log(useParams())
    const civ = getCiv( civilizacion );

  return (
    <div>
        <h3 className='text-4xl'>{civ.civ}</h3>
        <img src={`./../iconosAoe/${civ.icono}`} alt={civ} />
    </div>
  )
}

export default UserDetail