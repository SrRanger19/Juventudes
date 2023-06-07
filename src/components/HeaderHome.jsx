import React from 'react'
        
const HeaderHome = () => {
    return (
        <div className="grid grid-cols-4 mt-16">
            <h1 className="text-[#29262C] text-[18px]">Descuentos disponibles</h1>
            <h1 className="text-[#666666] col-start-4 grid grid-cols-3">ver todos<img src="./arrow.svg" className="w-3 h-3 col-start-2 mt-1"/></h1>
        </div>
    )
}
        
export default HeaderHome;