import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { getUser } from 'redux/auth/auth-selectors';
import css from './userMenu.module.scss';

const UserMenu = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.wrapper}>
      {name && <h3 className={css.header}>{name}</h3>}
      <button className={css.btn} onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
