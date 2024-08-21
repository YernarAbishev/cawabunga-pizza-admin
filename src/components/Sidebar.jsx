import {Link} from "react-router-dom";
import { HOME_PAGE, ORDERS_PAGE, PRODUCTS_PAGE } from "../utils/consts";

function Sidebar() {
    return (
        <nav className="sidebar">
            <div className="container-fluid">
                <h1 className="sidebar-title">Admin Site</h1>
                <ul className="sidebar-nav">
                    <li className="sidebar-nav__item">
                        <Link to={HOME_PAGE} className="sidebar-nav__link">Главная</Link>
                    </li>
                    <li className="sidebar-nav__item">
                        <Link to={PRODUCTS_PAGE} className="sidebar-nav__link">Товары</Link>
                    </li>
                    <li className="sidebar-nav__item">
                        <Link to={ORDERS_PAGE} className="sidebar-nav__link">Заказы</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Sidebar;