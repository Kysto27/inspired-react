import { NavLink } from 'react-router-dom';
import s from './Category.module.scss';
import cn from 'classnames';
import { useSelector } from 'react-redux';

export const Category = () => {
  const { genderList, categories } = useSelector((state) => state.navigation);
  return (
    <div className={s.category}>
      <h2 className={cn(s.title, s.categoryTitle)}>КАТАЛОГ</h2>
      <ul className={s.categoryList}>
        {genderList?.map((gender) => (
          <li key={gender} className={s.item}>
            <h3 className={s.categorySubtitle}>
              <NavLink className={s.link} to={gender}>
                {categories[gender].title}
              </NavLink>
            </h3>
            <ul className={s.categorySublist}>
              {categories[gender]?.list?.map((category) => (
                <li key={category.slug}>
                  <NavLink
                    className={s.link}
                    to={`${gender}/${category.slug}`}
                  >
                    {category.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
