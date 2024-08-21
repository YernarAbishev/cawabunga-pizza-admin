import {
    HOME_PAGE,
    PRODUCTS_PAGE,
    ADD_PRODUCT_PAGE,
    PRODUCT_DETAIL_PAGE,
    DELETE_PRODUCT_PAGE,
    EDIT_PRODUCT_PAGE,
    ORDERS_PAGE,
    DELETE_ORDER_PAGE,
    ORDER_DETAIL_PAGE
} from "./consts";

import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import AddProductPage from "../pages/AddProductPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import DeleteProductPage from "../pages/DeleteProductPage";
import EditProductPage from "../pages/EditProductPage";
import OrdersPage from "../pages/OrdersPage";
import OrderDetailPage from "../pages/OrderDetailPage";
import DeleteOrderPage from "../pages/DeleteOrderPage";

export const routes = [
    {
        path: HOME_PAGE,
        element: HomePage
    },
    {
        path: PRODUCTS_PAGE,
        element: ProductsPage
    },
    {
        path: ADD_PRODUCT_PAGE,
        element: AddProductPage
    },
    {
        path: PRODUCT_DETAIL_PAGE,
        element: ProductDetailPage
    },
    {
        path: DELETE_PRODUCT_PAGE,
        element: DeleteProductPage
    },
    {
        path: EDIT_PRODUCT_PAGE,
        element: EditProductPage
    },
    {
        path: ORDERS_PAGE,
        element: OrdersPage
    },
    {
        path: ORDER_DETAIL_PAGE,
        element: OrderDetailPage
    },
    {
        path: DELETE_ORDER_PAGE,
        element: DeleteOrderPage
    },
];