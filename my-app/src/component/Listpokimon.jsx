import React from 'react'

const Listpokimon = ({pokimon}) => {
  return (
    <div className='poks'>
        {pokimon.map((p,index) => 

                <div className='pok'>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt="" />
                    <span className="text">{p.name}</span>
                </div>

        )}
    </div>
  )
}

export default Listpokimon