import { useEffect, useState } from 'react';
import { getCiv } from '../../services/civs-api';
import { useParams } from 'react-router-dom'
import UnidUniCard from './UnidUniCard';
import BonusSection from './BonusSection';
import HeaderCiv from './HeaderCiv';
import TecUniSection from './TecUniSection';
import Loader from './Loader';

const UserDetail = () => {

    const [isLoading, setIsLoading] = useState(true)

    const { civilizacion } = useParams()    
    const civ = getCiv( civilizacion ); 
    const { bonus_civ:bc, bonus_eq:be, tecno_unica:tu, unidad_unica:uu } = civ

    useEffect(() => {
      window.scrollTo(0, 0)
      setTimeout(() => {
        setIsLoading(false)
      }, 600);      
    }, [])

  return (
    
    <>
      {isLoading 
        ? <Loader />
        :
          <>
            <HeaderCiv icono={civ.icono} nombre={civ.civ} espe={civ.espe} />
            <section className='py-8 px-5 md:px-24 lg:px-32 2xl:px-64 text-neutral-900'>
              <BonusSection bc={bc} be={be}/>
              <TecUniSection data={tu}/>        
            </section>
            <hr/>       
            <UnidUniCard uu={uu}/> 
          </>
      }
    </>
  )
}

export default UserDetail