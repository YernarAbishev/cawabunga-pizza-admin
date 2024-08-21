import { Link, useNavigate, useParams } from "react-router-dom";
import { PRODUCTS_PAGE } from "../utils/consts";
import { axiosInstance } from "../services/axiosInstance";

function DeleteProductPage() {

    const {id} = useParams();
    const navigate = useNavigate();


    async function handleDelete(e) {
        e.preventDefault();
        try {
            await axiosInstance.delete(`/product/${id}`);
            alert("Товар удален");
            navigate(PRODUCTS_PAGE);
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <section className="block">
            <div className="container-fluid">
                <Link to={PRODUCTS_PAGE} className="btn is-danger mb-5">Назад</Link>
                <h2 className="title">Удалить товар?</h2>
                <p className="delete-alert"><span>Вы действительно хотите удалить данный товар?</span> <span>После удаления невозможно будет восстановить товар</span></p>
                <form onSubmit={handleDelete} className="form-card">
                    <button type="submit" className="btn is-danger">Да</button>
                    <Link to={PRODUCTS_PAGE} className="btn is-warning">Нет</Link>
                </form>
            </div>
        </section>
    );
}

export default DeleteProductPage;