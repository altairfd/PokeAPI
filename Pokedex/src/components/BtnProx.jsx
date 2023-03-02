import React from 'react'

export default function ({aoClicar}) {
    let numero = 0
    
    function prox() {
        numero++
        return numero
    }

  return (
    <>
        <div className='bt'>
          <button onClick={() => aoClicar(prox())}>
            Próxima página
          </button>
        </div>
    </>
  )
}
