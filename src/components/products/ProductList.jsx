import ProductItem from "./ProductItem";
import { axiosInstance } from "../../services/axiosInstance";
import { useEffect, useState } from "react";

function ProductList() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await axiosInstance.get('/product');
                setProducts(res.data);
            } catch (e) {
                console.log(e);
            }
        }

        fetchProducts();
    }, []);

    return (
        <table className="products-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Название товара</th>
                    <th>Категория</th>
                    <th>Цена, &#8376;</th>
                    <th colspan="3">Действие</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <ProductItem product={product} key={product.id} />
                ))}
            </tbody>
        </table>
    );
}

export default ProductList;