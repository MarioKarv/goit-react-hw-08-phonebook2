import { NavLink } from 'react-router-dom';
import css from './NavBarAuth.module.scss';
const NavBarAuth = () => {
  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <li className={css.item}>
          <NavLink className={css.link} to="login">
            Login
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink className={css.link} to="registration">
            Registration
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default NavBarAuth;
