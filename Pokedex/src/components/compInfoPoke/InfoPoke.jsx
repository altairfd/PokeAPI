import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import InfoPrincipal from './InfoPrincipal';


export default function InfoPoke() {

    const {nome} = useParams();
    const [infoPoke, setInfoPoke] = useState([])

    useEffect(() => {
        const API = `http://localhost:3333/pokemon/${nome}`
        fetch(API)
            .then(dados => dados.json())
            .then(dados => setInfoPoke(dados))
            .catch(err => console.log(err))
        
    }, [])
    
    console.log(infoPoke)

    return (
        <>
            <div className='infopoke'>
                {infoPoke.map((infos) => (
                    <InfoPrincipal info={infos}
                    key={infos.numero}/>
                ))}
            </div>
        </>
    )
}
