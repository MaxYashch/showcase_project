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
    return (
        <li className="collection-item">
            {name}{" "}
            <i
                class="material-icons basket-quantity"
                onClick={() => decreaseQuantity(id)}
            >
                remove
            </i>{" "}
            x {quantity}
            <i
                class="material-icons basket-quantity"
                onClick={() => increaseQuantity(id)}
            >
                add
            </i>{" "}
            = {price * quantity} руб.
            <span
                href="#!"
                class="secondary-content"
                onClick={() => removeFromBasket(id)}
            >
                <i class="material-icons basket-delete">close</i>
            </span>
        </li>
    );
}
export { BasketItem };
