import React from 'react'
import ListarPokes from '../components/ListarPokes'
import ListaTipos from '../components/ListaTipos'
import Pokemons from '../components/Pokemons'

export default function Tipos() {
  return (
    <>
        <div>
          <ListaTipos/>
        </div>
        
        <div className="">
          <Pokemons/>
        </div>
    </>
  )
}
