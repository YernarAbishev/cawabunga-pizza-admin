import { Link } from "react-router-dom";
import OrderDetail from "../components/orders/OrderDetail";
import { ORDERS_PAGE } from "../utils/consts";

function OrderDetailPage() {
    return (
        <section className="block">
            <div className="container-fluid">
                <Link to={ORDERS_PAGE} className="btn is-danger mb-5">Назад</Link>
                <h2 className="title">Подробности заказа</h2>
                <OrderDetail/>
            </div>
        </section>
    );
}
export default OrderDetailPage;