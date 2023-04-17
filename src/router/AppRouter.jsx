import React from 'react';
import {Routes,Route,Navigate,NavLink} from 'react-router-dom';
import {HomePage, SuperHeroesPage, RQSuperHeroesPage} from '../pages'

export const AppRouter = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark rounded-3">
          <ul className="navbar-nav">
            <NavLink  to="/" end >Home </NavLink>
            <NavLink to="/SuperHeroesPage">SuperHeroesPage </NavLink>
            <NavLink to="/RQSuperHeroesPage">RQ SuperHeroesPage </NavLink>
          </ul>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/SuperHeroesPage' element={<SuperHeroesPage />}/>
        <Route path='/RQSuperHeroesPage' element={<RQSuperHeroesPage />}/>
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


*/