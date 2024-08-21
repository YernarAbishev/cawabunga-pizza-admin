import { useEffect, useState } from "react";
import OrderItem from "./OrderItem";
import { axiosInstance } from "../../services/axiosInstance";

function OrderList() {


    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function fetchOrders() {
            try {
                const res = await axiosInstance.get('/order');
                setOrders(res.data);
            } catch (e) { 
                console.log(e);
            }
        }
        fetchOrders();
    }, [])

    return (
        <table class="products-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Имя заказчика</th>
                    <th>Телефон</th>
                    <th>Дата и время</th>
                    <th colspan="2">Действие</th>
                </tr>
            </thead>
            <tbody>
                {orders.map((order) => (
                    <OrderItem order={order} key={order.id} />
                ))}
            </tbody>
        </table>
    );
}

export default OrderList;