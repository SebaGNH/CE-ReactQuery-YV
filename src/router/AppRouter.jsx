import React from 'react';
import {Routes,Route,Navigate,NavLink} from 'react-router-dom';
import {HomePage, SuperHeroesPage, RQ_01_SuperHeroesPage, RQ_02_SHPage_onClick, RQ_03_CallbackSuccessError, RQ_04_hookCustomQuery, RQ_05_ByID} from '../pages'
import { RQ_05_superHero } from '../components/RQ_05_superHero'

export const AppRouter = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav me-auto">

                <NavLink  to="/" end  className="nav-link btn btn-info mx-2">Home</NavLink>
                <NavLink to="/SuperHeroesPage" className="nav-link btn btn-info mx-2">SuperHeroesPage</NavLink>
              <NavLink to="/RQ_01_SuperHeroesPage" className="nav-link btn btn-info mx-2">RQ SuperHeroesPage</NavLink>
              <NavLink to="/RQ02SHPageonClick" className="nav-link btn btn-info mx-2">Refetch</NavLink>
              <NavLink to="/RQ03CallbackSuccessError" className="nav-link btn btn-info mx-2">RQ CallBacks</NavLink>
              </ul>
            </div>
          </div>
        </nav>

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav me-auto">
              <NavLink to="/RQ04hookCustomQuery" className="nav-link btn btn-info mx-2">Custom Hook</NavLink>
              <NavLink to="/rq-by-id/" className="nav-link btn btn-info mx-2">Query By ID</NavLink>
              </ul>
            </div>
          </div>
        </nav>
      </div>


      {/* Rutas */}
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/SuperHeroesPage' element={<SuperHeroesPage />}/>
        <Route path='/RQ_01_SuperHeroesPage' element={<RQ_01_SuperHeroesPage />}/>
        <Route path='/RQ02SHPageonClick' element={<RQ_02_SHPage_onClick />}/>
        <Route path='/RQ03CallbackSuccessError' element={<RQ_03_CallbackSuccessError />}/>
        <Route path='/RQ04hookCustomQuery' element={<RQ_04_hookCustomQuery />}/>
        <Route path='/rq-by-id/' element={<RQ_05_ByID />}/>
        {/* Mismo path "uno con id", pero diferente element */}
        <Route path='/rq-by-id/:heroid' element={<RQ_05_superHero />}/>
        <Route path='/*' element={<Navigate to='/' />}/>
      </Routes>
    </>
  )
}


/*

  <nav className="navbar navbar-expand-md navbar-dark bg-dark rounded-3">
    <Link className="navbar-brand" to="/">useContext</Link>

    <div className="collapse navbar-collapse">
      <ul className="navbar-nav">

        <NavLink  to="/" end >Home </NavLink>
        <NavLink
          className={({isActive}) => `nav-link ${isActive?'active':''}`}
          to="/AboutPage"
          >AboutPage
        </NavLink>
      </ul>
    </div>
  </nav>




    <nav className="navbar navbar-expand-md navbar-dark bg-dark rounded-3">
          <ul className="navbar-nav">
            <NavLink  to="/" end >Home </NavLink>
            <NavLink to="/SuperHeroesPage">SuperHeroesPage </NavLink>
            <NavLink to="/RQSuperHeroesPage">RQ SuperHeroesPage </NavLink>
          </ul>
      </nav>

*/