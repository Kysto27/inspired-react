import { Gender } from './Gender/Gender.jsx';
import { Category } from './Category/Category.jsx';

export const Navigation = () => (
    <nav>
        <div className="container">
            <Gender />
            <Category />
        </div>
    </nav>
)