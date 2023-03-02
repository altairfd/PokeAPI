import React, { useEffect, useState } from 'react'
import BtnAnt from '../BtnAnt'
import BtnProx from '../BtnProx'
import ListarPokes from '../ListarPokes'
import { Link } from 'react-router-dom'


export default function PokesRegioes({ regiao }) {
    const [pokeReg, setPokeReg] = useState([])
    const [page, setPage] = useState(0)

    useEffect(() => {
        const API = `http://localhost:3333/regions/${regiao}/20/${page}`

        fetch(API)
            .then(dados => dados.json())
            .then(dados => setPokeReg(dados))
            .catch(err => console.log(err))
    }, [regiao, page])

    useEffect(() => {
        setPage(0)
    }, [regiao])

    function proxPag() {
        setPage(page + 1)
        console.log(page)
    }

    function antPage() {
        if (page > 0) {
            setPage(page - 1);
        } else {
            setPage(0);
        }
        console.log(page)
    }


    return (
        <>

            <div className='buttons'>
                <div className='bt'>
                    <Link to={'/'}>
                        <button>
                            Tipos
                        </button>
                    </Link>
                </div>

                <BtnAnt aoClicar={antPage} />
                <BtnProx aoClicar={proxPag} />
            </div>

            <div className='pokes'>
                {pokeReg.map((pokePorReg) => (
                    <ListarPokes pokes={pokePorReg}
                        key={pokePorReg.numero} />
                ))}
            </div>
        </>
    )
}
