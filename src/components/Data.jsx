import React from "react";

const Data = ({ info }) => {
    return (
      <div className="grid grid-cols-4 gap-4">
        {
            info.map((item, index) => (
                <div key={index} className="h-full w-full bg-white">
                    <div className="h-[40%] w-full">
                      <img src={item.image} className="w-full h-full object-cover  rounded-tl-xl rounded-tr-xl"/>
                    </div>
                    <h1 className="text-sm mt-2">{item.name}</h1>
                    <div className="h-[3%] w-[20%] bg-[#FFB234] rounded-3xl mt-2"></div>
                    <div className="flex items-center gap-4 text-[#999999] mt-2">
                      <img src="./Descuento.svg" className="w-5 h-5"/>
                      <h1 className="text-[]#A8A8A8">{item.species}</h1>
                    </div>
                    <div className="flex items-center gap-4 text-[#999999] mt-2">
                      <img src="./Ubicacion.svg" className="w-5 h-5"/>
                      <h1 className="text-[]#A8A8A8">{item.status}</h1>
                    </div>
                </div>
            ))}
      </div>
    )
  }
  
  export default Data;