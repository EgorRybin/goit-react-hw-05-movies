import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from "react";

import s from '../SharedLayout/SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div>
      <nav className={s.nav}>
        <NavLink to="/" className={s.link}>Home</NavLink>
        <NavLink to="/movies" className={s.link}>Movies</NavLink>
      </nav>
      <Suspense>
          <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
