import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

// import Home from 'components/Home/Home';
// import Movies from 'components/Movies/Movies';

const SharedLayout = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
          </nav>
          <Outlet />
    </div>
  );
};

export default SharedLayout;
