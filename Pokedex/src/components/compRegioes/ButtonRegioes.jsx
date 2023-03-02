import React from 'react'

export default function ButtonRegioes({ListaReg, aoClicar}) {

 
    return (
        <>
            <div className='tipos'>
                <button onClick={() => aoClicar(ListaReg.nome)}>
                    {ListaReg.nome}
                </button>
            </div>
        </>
    )
}
