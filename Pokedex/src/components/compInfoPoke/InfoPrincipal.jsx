import React from 'react'

export default function InfoPrincipal({ info }) {

    function voltarPag() {
        window.history.back()
    }

    return (
        <>
            <div className='pokePrincipal'>
                <p>Numero: {info.numero}</p>
                <h1>{info.nome}</h1>
                <img src={info.img} />
                <p>HP: {info.hp}</p>
                <p>ATK: {info.atk}</p>
                <p>DEF: {info.def}</p>
                <p>SPATK: {info.spatk}</p>
                <p>SPDEF: {info.spdef}</p>
                <p>SPEED: {info.speed}</p>
            </div>

            <div className="bt">
                <button onClick={voltarPag}>
                    Voltar
                </button>
            </div>
        </>
    )
}
