
import { useState } from "react";
import { Hero } from "../components/Hero";
import { useForm } from "../hooks/useForm"
import { searchHero } from "../helpers/searchHero";
import { useLocation, useNavigate } from "react-router-dom";

export const SearchHero = () => {

  const navigate = useNavigate();
  const location = useLocation();

  //Busqueda leída del navegador
  const q = location.search.replace("?q=", "");
  const heroes = searchHero(q);

  const { busqueda, onInputChange } = useForm({busqueda: ''});

  const onSearchHero = async (event) => {
    event.preventDefault();

    if(busqueda.trim().length <= 1) return;

    navigate( "?q=" + busqueda );
  }

  return (
    <div className="container mt-4">
      <h2>Buscar super heroe</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Super heroe</label>
          <input onChange={onInputChange} type="text" className="form-control" name="busqueda" value={busqueda}/>
        </div>
        <button onClick={onSearchHero} type="submit" className="btn btn-primary">Buscar</button>
      </form>

      {
        (q === '') &&       <div className="alert alert-info mt-4">Busca un personaje</div>
      }

      {
        (heroes.length <= 0) && <div className="alert alert-danger mt-4">No hay resultados con <b>{q}</b></div>
      }

      <div className="container mt-3">
        {
          heroes.map(hero =>  (
              <Hero key={hero.id} hero={hero} />
          ))
        }
      </div>
    </div>
  )
}
