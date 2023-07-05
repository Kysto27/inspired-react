import s from './Development.module.scss';

export const Development = () => (
  <div className={s.development}>
    <ul className={s.developmentList}>
      <li>
        Designer:
        <a className={s.link} href='https://t.me/Mrshmallowww'>
          Anastasia Ilina
        </a>
      </li>
      <li>
        Developer:
        <a className={s.link} href='https://t.me/Kysto27'>
          Aleksandr Ratnikov
        </a>
      </li>
    </ul>
  </div>
);
