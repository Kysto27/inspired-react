import { NavLink } from 'react-router-dom';
import { API_URL } from '../../const';
import s from './Product.module.scss';
import { ReactComponent as Like } from '../../assets/heart.svg';
import { ColorList } from '../ColorList/ColorList';

export const Product = ({ id, pic, title, price, colors }) => (
  <article className={s.product}>
    <NavLink className={s.link} to={`product/${id}`}>
      <img className={s.image} src={`${API_URL}${pic}`} alt='' />
      <h3 className={s.title}>{title}</h3>
    </NavLink>
    <div className={s.row}>
      <p className={s.price}>руб {price}</p>
      <button className={s.favorite}>
        <Like />
      </button>
    </div>
    <ColorList colors={colors} />
  </article>
);
