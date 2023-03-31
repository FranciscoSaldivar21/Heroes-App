import { Link, NavLink, useNavigate } from "react-router-dom"


export const NavBar = () => {

    const navigate = useNavigate();

    const onLogOut = () => {
        //Elimina el historial para no regresar a la pagina anterior
        navigate('login', {replace: true})
    }
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3">
            
        <Link
            className="navbar-brand" 
            to="/"
        >
            Asociaciones
        </Link>

        <div className="navbar-collapse">
            <div className="navbar-nav">

                <NavLink
                    className={({isActive}) =>  `nav-link ${isActive ? 'active' : ''}`} 
                    to="MarvelPage"
                >
                    Marvel
                </NavLink>

                <NavLink 
                    className={({isActive}) =>  `nav-link ${isActive ? 'active' : ''}`}
                    to="DcPage"
                >
                    DC
                </NavLink>

                
                <NavLink 
                    className={({isActive}) =>  `nav-link ${isActive ? 'active' : ''}`}
                    to="SearchHero"
                >
                    Search
                </NavLink>
            </div>
        </div>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
            <ul className="navbar-nav ml-auto">
                <span className="nav-item nav-link text-primary">Francisco Saldivar</span>
                <button onClick={onLogOut} className="nav-item nav-link btn">Logout</button>
                {/* <NavLink 
                    className={({isActive}) =>  `nav-link ${isActive ? 'active' : ''}`}
                    to="LoginPage"
                >
                    Logout
                </NavLink> */}
            </ul>
        </div>
    </nav>
  )
}
