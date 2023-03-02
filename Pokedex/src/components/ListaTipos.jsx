import React, { useState } from 'react'
import { useEffect } from 'react'
import Button from './Button'
import Pokemons from './Pokemons'

export default function ListaTipos({}) {
    const [tiposPoke, setTiposPoke] = useState([])
    const [tipo, setTipo] = useState("normal")


    useEffect(() => {
        const API = `http://localhost:3333/types/`
        fetch(API)
            .then(dados => dados.json())
            .then(dados => setTiposPoke(dados))
            .catch(err => console.log(err))
    }, [])

    
    function salvarTipo(valor) {
        setTipo(valor)
    }

    return (
        <>
            <div className='lista-Tipos'>
                {tiposPoke.map((tipos) => (
                    <Button lista={tipos}
                    key={tipos.nome}
                    aoClicar={salvarTipo}/>
                ))}
            </div>

            <div>
                {<Pokemons tipo={tipo}/>}
            </div>
        </>
    )
}
