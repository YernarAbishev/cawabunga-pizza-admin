import { Link } from "react-router-dom";
import { DELETE_ORDER_PAGE, ORDER_DETAIL_PAGE } from "../../utils/consts";

function OrderItem({order}) {
    return (
        <tr>
            <td>{order.id}</td>
            <td>{order.customer.name}</td>
            <td>{order.customer.phone}</td>
            <td>{new Date(order.createdAt).toLocaleString()}</td>
            <td>
                <Link to={ORDER_DETAIL_PAGE.substring(0, ORDER_DETAIL_PAGE.length - 3) + order.id} class="btn is-primary">Смотреть</Link>
            </td>
            <td>
                <Link to={DELETE_ORDER_PAGE.substring(0, DELETE_ORDER_PAGE.length - 3) + order.id} class="btn is-danger">Удалить</Link>
            </td>
        </tr>
    );
}

export default OrderItem;