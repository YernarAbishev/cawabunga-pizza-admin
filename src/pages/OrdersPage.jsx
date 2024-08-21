import OrderList from "../components/orders/OrderList";
import { HOME_PAGE } from "../utils/consts";
import { Link } from "react-router-dom";

function OrdersPage() {
    return (
        <section className="block">
            <div className="container-fluid">
                <Link to={HOME_PAGE} className="btn is-danger mb-5">Назад</Link>
                <h2 className="title">Заказы</h2>
                <OrderList />
            </div>
        </section>
    );
}
export default OrdersPage;