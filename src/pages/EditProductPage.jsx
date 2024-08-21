import { Link, useNavigate, useParams } from "react-router-dom";
import { PRODUCTS_PAGE } from "../utils/consts";
import { useState, useEffect } from "react";
import { axiosInstance } from "../services/axiosInstance";


function EditProductPage() {

    const {id} = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: '',
        imageUrl: '',
        category: 'Пиццы',
        price: '',
        description: ''
    });

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

    function handleInputChange(e) {
        const {id, value} = e.target;
        setProduct({...product, [id]: value});
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await axiosInstance.patch(`/product/${id}`, product);
            alert("Товар изменен");
            navigate(PRODUCTS_PAGE);
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <section className="block">
            <div className="container-fluid">
                <Link to={PRODUCTS_PAGE} className="btn is-danger mb-5">Назад</Link>
                <h2 className="title">Изменить товар</h2>
                <form onSubmit={handleSubmit} className="form-card">
                <div className="form-control">
                        <label for="name">Название товара</label>
                        <input 
                            value={product.name}
                            onChange={handleInputChange}
                            id="name" 
                            type="text" 
                            placeholder="Введите название товара" 
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label for="imageUrl">Фото товара</label>
                        <input 
                            value={product.imageUrl}
                            onChange={handleInputChange}
                            id="imageUrl" 
                            type="url" 
                            placeholder="Введите или вставьте URL ссылку изображения" 
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label for="category">Выберите категорию</label>
                        <select value={product.category} onChange={handleInputChange} name="category" id="category">
                            <option value="Пиццы">Пиццы</option>
                            <option value="Напитки">Напитки</option>
                            <option value="Закуски">Закуски</option>
                            <option value="Соусы">Соусы</option>
                            <option value="Комбо">Комбо</option>
                            <option value="Другое">Другое</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label for="price">Укажите цену &#8376;</label>
                        <input 
                            value={product.price}
                            onChange={handleInputChange}                            
                            id="price" 
                            type="number" 
                            placeholder="Введите цену товара" 
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label for="description">Опишите товар</label>
                        <textarea value={product.description} onChange={handleInputChange} name="description" id="description" placeholder="Введите описание товара"></textarea>
                    </div>
                    <button type="submit" className="btn is-warning">Изменить товар</button>
                </form>
            </div>
        </section>
    );
}

export default EditProductPage;