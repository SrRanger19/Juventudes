import React from 'react'

const Information = () => {
  return (
    <div className="w-[90%] h-64 grid grid-cols-2">
        <div className="">
            <div className="grid grid-cols-2">
            <h1 className="text-lg">Informacion</h1>
            <h1 className="text-[#7BC5E9] col-start-2 text-center">Editar</h1>
            </div>
            <h1 className="mt-5 text-[#616161]">Javier Guadalupe Trujillo Sarmiento</h1>
            <h1 className="mt-5 text-[#616161]">11/02/2002</h1>
            <h1 className="mt-5 text-[#616161]">Tuxtla Gutierrez, Chiapas</h1>
        </div>
        <div className="col-start-2">
            <h1 className="text-lg">Tarjeta Juventudes</h1>
            <div className="grid grid-cols-2 gap-4 mt-5">
                <div className="">
                    <button className="h-32 w-full bg-[#53B4E3] rounded-xl flex flex-col items-center justify-center"><img src="./print.svg"/></button>
                    <h1 className="text-[#676767] text-sm mt-5">Imprimir</h1>
                </div>
                <div className="col-start-2">
                    <button className="h-32 w-full bg-[#D73A9B] rounded-xl flex flex-col items-center justify-center"><img src="visibility.svg"/></button>
                    <h1 className="text-[#676767] text-sm mt-3">Ver tarjeta</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Information;