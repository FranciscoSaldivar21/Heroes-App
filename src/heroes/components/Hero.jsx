import React from 'react'
import { Link } from 'react-router-dom';


export const Hero = ({hero}) => {
    const img = `/assets/heroes/${hero.id}.jpg`;
  return (
    <div className="card m-2">
        <img src={ img } className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{hero.superhero}</h5>
            <p className="card-text">{hero.first_appearance}</p>
            <Link to={`/HeroPage/${hero.id}`} className="btn btn-primary">Ver personaje</Link>
        </div>
    </div>
  )
}
