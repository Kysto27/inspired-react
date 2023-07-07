import { Navigation } from './Navigation/Navigation.jsx';
import { Top } from './Top/Top.jsx';
import s from './Header.module.scss'

export const Header = ({ list }) => (
    <header className={s.header}>
        <Top />
        <Navigation list={list} />
    </header>
)