import s from './Footer.module.scss';
import { Container } from '../Layout/Container/Container.jsx';
import { Category } from './Category/Category.jsx';
import { Contacts } from './Contacts/Contacts.jsx';
import { Copyright } from './Copyright/Copyright.jsx';
import { Development } from './Development/Development.jsx';
import { Social } from './Social/Social.jsx';

export const Footer = ({list}) => (
  <Container>
    <footer className={s.container}>
      <Category />
      <Social />
      <Contacts />
      <Copyright />
      <Development />
    </footer>
  </Container>
);
