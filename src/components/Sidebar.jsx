import React from 'react'

const Sidebar = () => {
  return (
    <div className="col-span-2 bg-white h-[94%] w-44 rounded-2xl absolute top-5 left-5">
        <div className="flex flex-col items-center justify-center">
            <img src="./LOGOOFICIAL1.svg" className= "w-28 h-14 object-fit mt-5"/>
            <img src="./yo.jpg" className="w-14 h-14 object-cover rounded-full mt-5"/>
            <h1 className="text-[#C0C0C0] mt-5">Bienvenido</h1>
            <p className="text-center text-[#000000] text-base">Javier Guadalupe Trujillo Sarmiento</p>
            <h1 className="text-[#000000] text-4xl mt-10">54</h1>
            <h1 className="text-[#C0C0C0] text-base">Descuentos disponibles</h1>
            <nav className="p-8 items-start justify-start">
              <a href="" className="flex items-center gap-4 text-[#A8A8A8] mt-3">
                <img src="./Vector.svg" className="w-5 h-5"/>
                <h1 className="text-[]#A8A8A8">Inicio</h1>
              </a>
              <a href="" className="flex items-center gap-4 text-[#A8A8A8] mt-5">
                <img src="./Ambar.svg" className="w-5 h-5"/>
                <h1 className="text-[]#A8A8A8">Ambar</h1>
              </a>
              <a href="" className="flex items-center gap-4 text-[#A8A8A8] mt-5">
                <img src="./Negocio.svg" className="w-5 h-5"/>
                <h1 className="text-[]#A8A8A8">Negocios</h1>
              </a>
              <a href="" className="flex items-center gap-4 text-[#A8A8A8] mt-5">
                <img src="./LogOut.svg" className="w-5 h-5"/>
                <h1 className="text-[]#A8A8A8">CerrarSesion</h1>
              </a>
            </nav>
        </div>
    </div>
  )
}

export default Sidebar;