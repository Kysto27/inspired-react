import s from './Contacts.module.scss';
import cn from 'classnames';

export const Contacts = () => (
  <div className={s.contacts}>
    <a className={s.link} href='mailto:Inspired@gmail.com'>
      Inspired@gmail.com
    </a>
    <a className={cn(s.link, s.phone)} href='tel:89304902620'>
      8 930 490 26 20
    </a>
  </div>
);
