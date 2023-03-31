import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";
import { useMemo } from "react";


export const HeroPage = () => {

  const params = useParams();


  const hero = useMemo( () => getHeroById(params.id), [params.id] );

  const navigate = useNavigate();


  //Regresar a la pagina anterior
  const onReturn = () => {
    navigate(-1);
  }

  if(!hero){
    return <Navigate to="/DcPage" />
  }
  
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={`/assets/heroes/${hero.id}.jpg`} alt={hero.superhero} className="img-thumbnail" />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{ hero.alter_ego }</li>
          <li className="list-group-item">{ hero.first_appearance }</li>
          <li className="list-group-item">{ hero.characters }</li>
        </ul>
        <button onClick={onReturn} className="btn btn-info">Regresar</button>
      </div>
    </div>
  )
}
