
const HeaderCiv = ({ icono, nombre, espe }) => {
  return (
    <>
        <header className='text-neutral-900 bg-yellow-100 py-6 md:py-12 px-4 md:px-24 lg:px-32 2xl:px-64 flex items-center gap-4 md:gap-6'>
            <img className='w-20 md:w-[104px]' src={`./../iconosAoe/${icono}`} alt={nombre} />
            <div className='flex flex-col'>
                <h1 className='text-4xl md:text-6xl font-bold'>{nombre}</h1>
                <p className='text-base md:text-xl'>{espe}</p>
            </div>
        </header>
    </>
  )
}

export default HeaderCiv