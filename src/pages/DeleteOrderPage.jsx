import { Link } from "react-router-dom";
import { ORDERS_PAGE } from "../utils/consts";

function DeleteOrderPage() {
    return (
        <section className="block">
            <div className="container-fluid">
                <Link to={ORDERS_PAGE} className="btn is-danger mb-5">Назад</Link>
                <h2 className="title">Удалить заказ?</h2>
                <p className="delete-alert"><span>Вы действительно хотите удалить данный заказ?</span> <span>После удаления невозможно будет восстановить заказ</span></p>
                <form action="" className="form-card">
                    <button className="btn is-danger">Да</button>
                    <Link to={ORDERS_PAGE} className="btn is-warning">Нет</Link>
                </form>
            </div>
        </section>
    );
}

export default DeleteOrderPage;