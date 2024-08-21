import { Link } from "react-router-dom";
import ProductDetail from "../components/products/ProductDetail";
import { PRODUCTS_PAGE } from "../utils/consts";

function ProductDetailPage() {
    return (
        <section className="block">
            <div className="container-fluid">
                <Link to={PRODUCTS_PAGE} className="btn is-danger mb-5">Назад</Link>
                <h2 className="title">Подробности товара</h2>
                <ProductDetail />
            </div>
        </section>
    );
}

export default ProductDetailPage;