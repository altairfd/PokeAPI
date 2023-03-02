import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import BtnAnt from './BtnAnt'
import BtnProx from './BtnProx'
import ListarPokes from './ListarPokes'
import { Link } from 'react-router-dom'


export default function Pokemons({ tipo }) {
  const [pokemon, setPokemon] = useState([])
  const [page, setPage] = useState(0)

  useEffect(() => {
    const API = `http://localhost:3333/types/${tipo}/20/${page}`
    fetch(API)
      .then(dados => dados.json())
      .then(dados => setPokemon(dados))
      .catch(err => console.log(err))
  }, [tipo, page])

  useEffect(() => {
    setPage(0)
  }, [tipo])

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
          <Link to={'/regioes'}>
            <button>
              Regioes
            </button>
          </Link>
        </div>

          <BtnAnt aoClicar={antPage} />
          <BtnProx aoClicar={proxPag} />
      </div>

      <div className='pokes'>
        <div className='poke-box'>
          {pokemon.map((lista) => (
            <ListarPokes pokes={lista}
              key={lista.numero} />
          ))}
        </div>
      </div>
    </>
  )
}
