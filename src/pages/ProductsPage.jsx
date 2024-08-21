import { Link } from "react-router-dom";
import ProductList from "../components/products/ProductList";
import { ADD_PRODUCT_PAGE, HOME_PAGE } from "../utils/consts";

function ProductsPage() {
    return (
        <section className="block">
            <div className="container-fluid">
                <Link to={HOME_PAGE} className="btn is-danger mb-5">Назад</Link>
                <h2 className="title">Товары</h2>
                <ProductList />
                <Link to={ADD_PRODUCT_PAGE} className="circle-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-bag-plus-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5z"/>
                    </svg>
                </Link>
            </div>
        </section>
    );
}

export default ProductsPage;