import { useParams } from "react-router-dom";
import { axiosInstance } from "../../services/axiosInstance";
import { useEffect, useState } from "react";

function ProductDetail() {

    const {id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        async function fetchProduct() {
            try {
                const res = await axiosInstance.get(`/product/${id}`);
                setProduct(res.data);
            } catch(e) {
                console.log(e);
            }
        }
        fetchProduct();
    }, [id]);


    return (
        <div className="product-detail-row">
            <div className="product-detail-img">
                <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="product-detail-info">
                <h3>Название товара: {product.name}</h3>
                <h3>Категория: {product.category}</h3>
                <h3>Цена: {product.price} &#8376;</h3>
                <p>Описание: {product.description}</p>
            </div>
        </div>
    );
}
export default ProductDetail;