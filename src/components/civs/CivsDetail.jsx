import { getCiv } from '../../services/civs-api';
import { useParams } from 'react-router-dom'

const UserDetail = () => {

    const { civilizacion } = useParams()    
    const civ = getCiv( civilizacion );
    const uu = civ.unidad_unica;

    console.log(civ.unidad_unica)
  return (
    <>
      <div className='text-neutral-900 bg-yellow-100 py-6 md:py-12 px-4 md:px-24 flex items-center gap-4 md:gap-6'>
          <img className='w-20 md:w-[104px]' src={`./../iconosAoe/${civ.icono}`} alt={civ} />
          <div className='flex flex-col'>
            <h1 className='text-4xl md:text-6xl font-bold'>{civ.civ}</h1>
            <p className='text-base md:text-xl'>{civ.espe}</p>
          </div>
      </div>
      <section className='py-8 px-5 md:px-24 text-neutral-900'>
        <h2 className='text-xl font-bold mb-2'>Bonus de Civilización</h2>
        <ul>
          {civ.bonus_civ.map((bc) => {
            return (<li className='font-light list-disc list-inside pl-2'>{bc}</li>)
          })}
        </ul>
        <h2 className='text-xl font-bold mt-6 mb-2'>Bonus de Equipo</h2>
        <li className='pl-2 font-light'>{civ.bonus_eq}</li>
      </section>

      <hr class="my-2"/>  
      
      <section className='py-8 px-5 md:px-24 text-neutral-900 mb-10'>
        <h2 className='text-xl font-bold mb-4'>Unidades unicas</h2>
        <div className='flex gap-2'>
          <div className='p-4 w-48 border shadow-xl rounded-xl'>
            <img
              className='rounded-md'  
              src={`./../iconosAoe/${uu.icono}`} 
              alt={uu.nombre}
            />
            <h3 className='mt-2 font-bold'>{uu.nombre}</h3>
            <p className='text-sm'>{uu.especialidad}</p>
            <hr class="my-2"/>                                  
            <div class="text-sm mt-1">
              <p className='font-bold text-green-600'>Mejora</p>
              <p className=''>{uu.mejora}</p>           
            </div>            
          </div>
        </div>
      </section> 
    </>
  )
}

export default UserDetail