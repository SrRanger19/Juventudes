import React from "react";

const Data = ({ info = [] }) => {
    return (
      <div className="h-[40%] w-full">
        {
            info.map((item, id) => (
                <div key={id} className="h-full w-full">
                    <img src={item.image} className="w-full h-full object-cover"/>
                </div>
            ))}
      </div>
    )
  }
  
  export default Data;