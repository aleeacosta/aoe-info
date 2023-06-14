

const BonusSection = ( { bc, be } ) => {
  return (
    <>
        <h2 className='text-xl font-bold mb-2'>Bonus de Civilización</h2>
        <ul>
          {bc.map((bc) => {
            return (<li key={bc} className='font-light list-disc list-inside pl-2'>{bc}</li>)
          })}
        </ul>

        <h2 className='text-xl font-bold mt-6 mb-2'>Bonus de Equipo</h2>
        <li className='pl-2 font-light'>{be}</li>
    </>
  )
}

export default BonusSection