import React from 'react'

export default function BtnAnt({aoClicar}) {
    let numero = 0

    function ant() {
        numero--
        return numero
    }

    return (
        <>
            <div className='bt'>
                <button onClick={() => aoClicar(ant())}> Página anterior</button>
            </div>
        </>
    )
}
