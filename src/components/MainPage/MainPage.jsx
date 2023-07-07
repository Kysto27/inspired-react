import { useParams } from 'react-router-dom';
import { Container } from '../Layout/Container/Container';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchGoods } from '../../features/goodsSlice.js';

export const MainPage = ({ gender = 'women' }) => {
  const { category } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGoods())
  }, [gender, dispatch]);

  return (
    <Container>
      <div>MainPage {gender}</div>
      {category && <p>Категория: {category}</p>}
    </Container>
  );
};
