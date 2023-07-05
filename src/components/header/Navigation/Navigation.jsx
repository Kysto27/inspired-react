import { Gender } from './Gender/Gender.jsx';
import { Category } from './Category/Category.jsx';
import { Container } from '../../Layout/Container/Container.jsx';

export const Navigation = ({ list }) => (
  <nav>
    <Container>
      <Gender list={list}/>
      <Category list={list}/>
    </Container>
  </nav>
);
