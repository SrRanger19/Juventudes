const HeaderBar = () => {
    return(
        <div className="w-full h-20 absolute grid grid-cols-5 justify-center items-center bg-white">
            <div className="flex flex-col items-center justify-center col-start-1">
                <img src="./LOGOOFICIAL1.svg" className="w-28 h-14 object-fit"/>
            </div>
            <div className="grid grid-cols-3 justify-center items-center">
                <h1 className=" text-[#787878]">Inicio</h1>
                <h1 className="col-start-2 text-[#787878]">Negocios</h1>
                <h1 className="col-start-3 text-[#787878]">Contactanos</h1>
            </div>
            <button className="col-start-5 bg-[#2CA3DC] h-[40px] w-32">Iniciar Sesion</button>
        </div>
    )
}

export default HeaderBar;