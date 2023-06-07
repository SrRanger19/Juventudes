import React, {useEffect, useState} from 'react'
import Data from './Data';

const Card = () => {

    const [info, setInfo] = useState([]);

    const InitialUrl = "https://rickandmortyapi.com/api/character";

    const FetchData = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => setInfo(data.results))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        FetchData(InitialUrl);
    }, [])

  return (
    <div className="grid grid-cols-4">
        <div className="col-span-4 grid h-auto w-[90%] mt-5">
            <Data info={info}/>
        </div>
    </div>
  )
}

export default Card;