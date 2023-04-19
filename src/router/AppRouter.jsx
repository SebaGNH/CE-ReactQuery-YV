import React from 'react';
import {Routes,Route,Navigate,NavLink} from 'react-router-dom';
import {HomePage, SuperHeroesPage, RQSuperHeroesPage, RQ_02_SHPage_onClick} from '../pages'

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
              <NavLink to="/RQSuperHeroesPage" className="nav-link btn btn-info mx-2">RQ SuperHeroesPage</NavLink>
              <NavLink to="/RQ02SHPageonClick" className="nav-link btn btn-info mx-2">RQ SuperHeroesPage</NavLink>

              </ul>
            </div>
          </div>
        </nav>


      </div>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/SuperHeroesPage' element={<SuperHeroesPage />}/>
        <Route path='/RQSuperHeroesPage' element={<RQSuperHeroesPage />}/>
        <Route path='/RQ02SHPageonClick' element={<RQ_02_SHPage_onClick />}/>
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