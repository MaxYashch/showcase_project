import React, { useEffect, useContext } from "react";
import { API_KEY, API_URL } from "../config";
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";
import { ShopContext } from "../context";

function Shop() {
    // const [loading, setLoading] = useState(true);
    // const [order, setOrder] = useState([]);
    // const [, setBasketShow] = useState(false);
    // const [, setAlertName] = useState("");
    const { loading, order, isBasketShow, alertName, setGoods } = useContext(
        ShopContext
    );

    // const removeFromBasket = (itemId) => {
    //     const newOrder = order.filter((el) => el.id !== itemId);
    //     setOrder(newOrder);
    // };

    // const increaseQuantity = (itemId) => {
    //     const newOrder = order.map((el) => {
    //         if (el.id === itemId) {
    //             const newQuantity = el.quantity + 1;
    //             return {
    //                 ...el,
    //                 quantity: newQuantity,
    //             };
    //         } else {
    //             return el;
    //         }
    //     });
    //     setOrder(newOrder);
    // };

    // const decreaseQuantity = (itemId) => {
    //     const newOrder = order.map((el) => {
    //         if (el.id === itemId) {
    //             const newQuantity = el.quantity - 1;
    //             return {
    //                 ...el,
    //                 quantity: newQuantity >= 0 ? newQuantity : 0,
    //             };
    //         } else {
    //             return el;
    //         }
    //     });
    //     setOrder(newOrder);
    // };

    // const handleBasketShow = () => {
    //     setBasketShow(!isBasketShow);
    // };

    // const closeAlert = () => {
    //     setAlertName("");
    // };

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setGoods(data.featured);
            });
        // eslint-disable-next-line
    }, []);

    return (
        <main className="container content">
            <Cart quantity={order.length} />
            {loading ? <Preloader /> : <GoodsList />}
            {isBasketShow && <BasketList />}
            {alertName && <Alert />}
        </main>
    );
}

export { Shop };
