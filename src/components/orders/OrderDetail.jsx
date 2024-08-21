import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../services/axiosInstance";

function OrderDetail() {

    const {id} = useParams();
    const [order, setOrder] = useState({
        customer: {},
        items: [],
        total: 0,
        createdAt: ''
    });

    useEffect(() => {
        async function fetchOrder() {
            try {
                const res = await axiosInstance.get(`/order/${id}`);
                setOrder(res.data);
            } catch(e) {
                console.log(e);
            }
        }
        fetchOrder();
    }, [id]);

    return (
        <div class="order-detail-info">
            <h3>Номер заказа № {order.id}</h3>
            <h3>Имя заказчика: {order.customer.name}</h3>
            <h3>Телефон: {order.customer.phone}</h3>
            <h3>Город: {order.customer.city}</h3>
            <h3>Адрес: {order.customer.address}</h3>
            <h3>Тип оплаты: {order.customer.paymentType}</h3>
            <h3>Выбранные товары:</h3>
            <ul>
                {order.items.map((item) => (
                    <li key={item.productId}>
                        <i>{item.name}</i>, 
                        <strong>количество: {item.quantity}</strong>, 
                        цена {item.price} &#8376;, 
                        итого {item.price * item.quantity} &#8376;
                    </li>
                ))}
            </ul>
            <h3>Итого: {order.total} &#8376;</h3>
        </div>
    );
}

export default OrderDetail;