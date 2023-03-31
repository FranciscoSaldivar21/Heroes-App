import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes"


export const AppRouter = () => {
  return (
    <>
        <Routes>
            {/* En el login oculta el NavBar */}
            <Route path="Login" element = { <LoginPage /> } />

            {/* En cualquier ruta que no sea el login muestra lo que renderiza HeroesRoutes, que en este caso es el navBar */}
            <Route path="/*" element = { <HeroesRoutes /> } />
        </Routes> 
    </>
  )
}
