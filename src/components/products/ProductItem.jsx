import { Link } from "react-router-dom";
import { DELETE_PRODUCT_PAGE, EDIT_PRODUCT_PAGE, PRODUCT_DETAIL_PAGE } from "../../utils/consts";

function ProductItem({product}) {
    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>{product.price} &#8376;</td>
            <td>
                <Link to={PRODUCT_DETAIL_PAGE.substring(0, PRODUCT_DETAIL_PAGE.length - 3) + product.id } class="btn is-primary">Смотреть</Link>
            </td>
            <td>
                <Link to={EDIT_PRODUCT_PAGE.substring(0, EDIT_PRODUCT_PAGE.length - 3) + product.id } class="btn is-warning">Изменить</Link>
            </td>
            <td>
                <Link to={DELETE_PRODUCT_PAGE.substring(0, DELETE_PRODUCT_PAGE.length - 3) + product.id } class="btn is-danger">Удалить</Link>
            </td>
        </tr>
    );
}

export default ProductItem;