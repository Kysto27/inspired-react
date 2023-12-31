import { Gender } from './Gender/Gender.jsx';
import { Category } from './Category/Category.jsx';
import { Container } from '../../Layout/Container/Container.jsx';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { setActiveGender } from '../../../features/navigationSlice.js';

export const Navigation = () => (
  // const location = useLocation();
  // const gender = location.pathname.split('/')[1] || 'women';
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(setActiveGender(gender));
  // }, [gender, dispatch]);
  <nav>
    <Container>
      <Gender />
      <Category />
    </Container>
  </nav>
);
