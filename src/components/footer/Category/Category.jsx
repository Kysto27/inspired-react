import s from '../Footer.module.scss';
import cn from 'classnames';

export const Category = () => (
  <div className={s.category}>
    <h2 className={cn(s.title, s.categoryTitle)}>КАТАЛОГ</h2>
    <div className={s.categoryList}>
      <ul className={s.categorySublist}>
        <li>
          <h3 className={s.categorySubtitle}>Женщины</h3>
        </li>
        <li>
          <a className={s.link} href='/'>
            Бюстгальтеры
          </a>
        </li>
        <li>
          <a className={s.link} href='/'>
            Трусы
          </a>
        </li>
        <li>
          <a className={s.link} href='/'>
            Носки
          </a>
        </li>
        <li>
          <a className={s.link} href='/'>
            Халаты
          </a>
        </li>
        <li>
          <a className={s.link} href='/'>
            Термобелье
          </a>
        </li>
        <li>
          <a className={s.link} href='/'>
            Пижамы
          </a>
        </li>
      </ul>
      <ul className={s.categorySublist}>
        <li>
          <h3 className={s.categorySubtitle}>Мужчины</h3>
        </li>
        <li>
          <a className={s.link} href='/'>
            Трусы
          </a>
        </li>
        <li>
          <a className={s.link} href='/'>
            Носки
          </a>
        </li>
        <li>
          <a className={s.link} href='/'>
            Халаты
          </a>
        </li>
        <li>
          <a className={s.link} href='/'>
            Термобелье
          </a>
        </li>
      </ul>
    </div>
  </div>
);
