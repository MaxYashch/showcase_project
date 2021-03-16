import { useContext } from "react";
import { ShopContext } from "../context";

function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        increaseQuantity = Function.prototype,
        decreaseQuantity = Function.prototype,
    } = props;

    const { example } = useContext(ShopContext);

    return (
        <li className="collection-item">
            {name}{" "}
            <i
                className="material-icons basket-quantity"
                onClick={() => decreaseQuantity(id)}
            >
                remove
            </i>{" "}
            x {quantity}
            <i
                className="material-icons basket-quantity"
                onClick={() => increaseQuantity(id)}
            >
                add
            </i>{" "}
            = {price * quantity} руб.
            <span
                href="#!"
                className="secondary-content"
                onClick={() => removeFromBasket(id)}
            >
                <i className="material-icons basket-delete">close</i>
            </span>
        </li>
    );
}
export { BasketItem };
