import React, {useEffect, useState} from 'react'
import Data from './Data';

const Card = () => {

    const [info, setinfo] = useState([]);

    const InitialUrl = "https://rickandmortyapi.com/api/character";

    const FetchData = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => setinfo(data.results))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        FetchData(InitialUrl);
    }, [])

  return (
    <div className="grid grid-cols-4 mt-16">
        <h1 className="text-[#29262C] text-[18px]">Descuentos disponibles</h1>
        <h1 className="text-[#666666] col-start-4 grid grid-cols-3">ver todos<img src="./arrow.svg" className="w-3 h-3 col-start-2 mt-1"/></h1>
        <div className="col-span-4 grid grid-cols-4 h-72 w-[90%] bg-black">
            <Data/>
        </div>
    </div>
  )
}

export default Card;