import { NavLink, useLocation } from 'react-router-dom';
import s from './Category.module.scss';
import cn from 'classnames';

export const Category = ({ list }) => {
  const location = useLocation();
  const activeGender = location.pathname.slice(1).split('/')[0];
  const filteredList = list.filter((item) => item.link === activeGender);
  return (
    <ul className={s.category}>
      {filteredList[0].categories.map((item) => (
        <li key={item.link} className={s.item}>
          <NavLink
            className={({ isActive }) => cn(s.link, isActive && s.linkActive)}
            to={`${activeGender}/${item.link}`}
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
