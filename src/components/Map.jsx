import React from 'react'

const Map = () => {
    
  return (
    <div className="h-[86%] w-[75%] absolute left-80 top-24 " >
        <div className='grid grid-cols-6'>
        <h1 className="mt-10 col-span-2" >Negocios participantes</h1>
        <select className="mt-10 col-start-4 w-32 px-4 py-2 ">
        <option value="">categoria</option>
        <option value="opcion1">Opción 1</option>
        <option value="opcion2">Opción 2</option>
        <option value="opcion3">Opción 3</option>
        </select>

        <select className="mt-10 col-start-5 w-32 px-4 py-2 ">
        <option value="">Estado</option>
        <option value="opcion1">Opción 1</option>
        <option value="opcion2">Opción 2</option>
        <option value="opcion3">Opción 3</option>
        </select>

        <select className="mt-10 col-start-6 w-32 px-4 py-2 ">
        <option value="">municipio</option>
        <option value="opcion1">Opción 1</option>
        <option value="opcion2">Opción 2</option>
        <option value="opcion3">Opción 3</option>
        </select>

        </div>
        <br />
        <div className="h-[80%] w-[95%] absolute items-center justify-center">
          <img src="./Map.svg" className="w-full h-full object-cover"/>
        </div>
    </div>
  )
}

export default Map;