import { useParams } from 'react-router-dom';
import { Container } from '../Layout/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchGoods } from '../../features/goodsSlice.js';
import s from './MainPage.module.scss';
import { Product } from '../Product/Product';

export const MainPage = () => {
  const { gender, category } = useParams();
  const dispatch = useDispatch();
  const { goodsList } = useSelector((state) => state.goods);

  const {} = useSelector(state => state.navigation)

  useEffect(() => {
    dispatch(fetchGoods(gender));
  }, [gender, dispatch]);

  return (
    <section className={s.goods}>
      <Container>
        <h2 className={s.title}>Новинки</h2>
        <ul className={s.list}>
          {goodsList.map((item) => (
            <li key={item.id}>
              <Product {...item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
