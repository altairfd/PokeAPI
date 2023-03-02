import React from 'react'

export default function Button({lista, aoClicar}) {
  return (
    <>
        <div>
          <button className='tipos'
          onClick={() => aoClicar(lista.nome)}>
            {lista.nome}
          </button>
        </div>
    </>
  )
}
