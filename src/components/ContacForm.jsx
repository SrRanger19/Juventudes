import React from 'react'

const ContactForm = () => {
  return (
    <div className="col-span-5 h-screen w-full">
        <div className="grid grid-cols-2 h-20">
            <div className="flex flex-col items-center justify-center">
                <img src="./LOGOOFICIAL1.svg" className="w-28 h-14 object-fit"/>
            </div>
            <div className="grid grid-cols-3 flex flex-col items-center justify-center">
                <h1 className="">Inicio</h1>
                <h1 className="col-start-2 text-[#787878]">Negocios</h1>
                <h1 className="col-start-3 text-[#787878]">Contactanos</h1>
            </div>
        </div>
        <form className="w-[70%] h-[88%] ml-[20%]">
            <h1 className="text-[52px]">Contactanos</h1>
            <div className="h-[1%] w-[17%] bg-[#2CA3DC] rounded-3xl mt-2"></div>
            <div className="mt-3">
                <label className="text-[20.16px]">Nombre</label><br/> 
                <input type="text" className="rounded-[6.3px] border-1 border-[#6A6A6A] h-[30%] w-full text-[18px] placeholder-[#6A6A6A] border mt-3" placeholder="Nombre"/>  
            </div>
            <div className="mt-3">
                <label className="text-[20.16px]">Correo electronico</label><br/>
                <input type="text" className="rounded-[6.3px] border-1 border-[#6A6A6A] text-[18px] w-full placeholder-[#6A6A6A] border mt-3" placeholder="Correo electronico"/>
            </div>
            <div className="mt-3">
                <label className="text-[20.16px]">Telefono</label><br/>
                <input type="text" className="rounded-[6.3px] border-1 border-[#6A6A6A] text-[18px] w-full placeholder-[#6A6A6A] border mt-3" placeholder="Telefono"/>
            </div>
            <div className="mt-3">
                <h1 className="text-[20.16px]">Mensaje</h1>
                <textarea cols="30" rows="5" className="textarea textarea-bordered rounded-[6.3px] border-1 border-[#6A6A6A] w-full placeholder-[#6A6A6A] border mt-3" placeholder="Mensaje"></textarea>
            </div>
            <button className="bg-[#BD2683] text-white h-[50px] w-32 mt-3">Enviar</button>
        </form>
    </div>
  )
}

export default ContactForm;