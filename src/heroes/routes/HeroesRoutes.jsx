import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../../auth/pages/LoginPage'
import { NavBar } from '../../ui/components/NavBar'
import { DcPage } from '../pages/DcPage'
import { HeroPage } from '../pages/HeroPage'
import { MarvelPage } from '../pages/MarvelPage'
import { SearchHero } from '../pages/SearchHero'

export const HeroesRoutes = () => {
  return (
    <>
        <NavBar />

        <div className='container'>
            <Routes>
                <Route path="Login" element = { <LoginPage/> } />
                <Route path="MarvelPage" element = { <MarvelPage/> } />
                <Route path="DcPage" element = { <DcPage/> } />
                <Route path="HeroPage/:id" element = { <HeroPage/> } />
                <Route path="SearchHero" element = { <SearchHero/> } />
                <Route path="/*" element = { <Navigate to="Login" /> } />
            </Routes> 
        </div>
    </>
  )
}
