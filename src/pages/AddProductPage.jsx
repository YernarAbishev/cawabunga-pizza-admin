import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../services/axiosInstance";
import { useState } from "react";
import { PRODUCTS_PAGE } from "../utils/consts";


function AddProductPage() {

    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: '',
        imageUrl: '',
        category: 'Пиццы',
        price: '',
        description: ''
    });

    function handleInputChange(e) {
        const {id, value} = e.target;
        setProduct({...product, [id]: value});
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await axiosInstance.post('/product', product);
            alert("Товар добавлен");
            navigate(PRODUCTS_PAGE);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <section className="block">
            <div className="container-fluid">
                <span className="btn is-danger mb-5">Назад</span>
                <h2 className="title">Добавить товар</h2>
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
                    <button type="submit" className="btn is-primary">Добавить товар</button>
                </form>
            </div>
        </section>
    );
}

export default AddProductPage;