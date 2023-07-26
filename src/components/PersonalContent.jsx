import React from 'react'

const PersonalContent = () => {
  return (
    <div className="h-[86%] w-[65%] absolute left-80 top-24  " >
        <form className="h-auto w-[60%] grid grid-cols-2">
            <h1 className="mt-12">Datos Personales</h1><br/>
            <input type="text" className="col-span-2 rounded-[6.3px] border-1 border-[#6A6A6A] h-[50px] w-[95%] text-[18px] placeholder-[#6A6A6A] border mt-3" placeholder="Nombre"/>
            <input type="text" className=" rounded-[6.3px] border-1 border-[#6A6A6A] h-[50px] w-[90%] text-[18px] placeholder-[#6A6A6A] border mt-3" placeholder="Apellido paterno"/>
            <input type="text" className=" rounded-[6.3px] border-1 border-[#6A6A6A] h-[50px] w-[90%] text-[18px] placeholder-[#6A6A6A] border mt-3 " placeholder="Apellido materno"/>
            <input type="text" className="col-span-2 rounded-[6.3px] border-1 border-[#6A6A6A] h-[50px] w-[95%] text-[18px] placeholder-[#6A6A6A] border mt-3 " placeholder="Genero"/>
            <button className="bg-pink-700 hover:bg-pink-800 text-white w-[45%] h-12 rounded-[6.3px] border-1 border-[#6A6A6A] col-span-2 mt-3">
            Actualizar
            </button>
            <h1 className="mt-12">Editar datos Personales</h1><br/>
            <input type="text" className="col-span-2 rounded-[6.3px] border-1 border-[#6A6A6A] h-[50px] w-[95%] text-[18px] placeholder-[#6A6A6A] border mt-3" placeholder="Domicilio"/>
            <input type="text" className=" rounded-[6.3px] border-1 border-[#6A6A6A] h-[50px] w-[90%] text-[18px] placeholder-[#6A6A6A] border mt-3" placeholder="Estado"/>
            <input type="text" className=" rounded-[6.3px] border-1 border-[#6A6A6A] h-[50px] w-[90%] text-[18px] placeholder-[#6A6A6A] border mt-3 " placeholder="Municipio"/>
            <button className="bg-pink-700 hover:bg-pink-800 text-white w-[45%] h-12 rounded-[6.3px] col-span-2 mt-3 ">
            Actualizar
            </button>
            <h1 className="mt-12">Editar contraseña</h1><br/>
            <input type="text" className="col-span-2 rounded-[6.3px] border-1 border-[#6A6A6A] h-[50px] w-[95%] text-[18px] placeholder-[#6A6A6A] border mt-3" placeholder="Ingrese su contraseña actual"/>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white  w-[45%] h-12 rounded-[6.3px] col-span-2 border-1 border-[#6A6A6A] mt-3">
            Siguiente
            </button>
        </form>
    </div>
  )
}

export default PersonalContent;