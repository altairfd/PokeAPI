import React, { useEffect, useState } from 'react'
import ButtonRegioes from './ButtonRegioes'
import PokesRegioes from './PokesRegioes'

export default function ListaRegioes() {
    const [listaRegioes, setListaRegioes] = useState([])
    const [regiao, setRegiao] = useState()

    useEffect(() => {
        const API = `http://localhost:3333/regions`

        fetch(API)
            .then(dados => dados.json())
            .then(dados => setListaRegioes(dados))
            .catch(err => console.log(err))
    }, [])

    if (regiao == null) {
        setRegiao("kanto")
    }

    function salvarRegiao(valor) {
        setRegiao(valor)
        console.log(valor)
    }

    return (
        <>
            <div className='lista-Tipos'>
                {listaRegioes.map((listaReg) => (
                    <ButtonRegioes ListaReg={listaReg}
                        key={listaReg.nome}
                        aoClicar={salvarRegiao} />
                ))}
            </div>

            <div className="poke-box">
                <PokesRegioes regiao={regiao} />
            </div>
        </>
    )
}
