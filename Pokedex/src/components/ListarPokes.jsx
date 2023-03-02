import React from 'react'
import { Link } from 'react-router-dom'

export default function ListarPokes({ pokes }) {
    return (
        <>
            <div className='card'>
                <div className='numero'>
                    {pokes.numero}
                </div>
                <div>
                    <Link to={`/pokemon/${pokes.nome}`}>
                        <img src={pokes.img} />
                    </Link>
                </div>
                <div>
                    <h2>{pokes.nome}</h2>
                </div>
                <div>
                    {pokes.tipo}
                </div>
            </div>
        </>
    )
}
