
const BtnFiltro = ({ icon, texto, filtro }) => {
  return (
    <button 
        className='flex gap-2 items-center py-1 px-3 border shadow-md rounded-full text-neutral-900' 
        onClick={filtro}> 
        {icon}
        {texto}
    </button>
  )
}

export default BtnFiltro