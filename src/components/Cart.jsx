import { useContext } from "react";
import CartContext from "../store/cartContext";
import Modal from "../UI/Modal";
import { currencyFormatter } from "../util/formatting";
import Button from "../UI/Button";
import UserProgressContext from "../store/userProgressContext";
import CartItem from "./CartItem";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userCtx = useContext(UserProgressContext);

  function handleCloseCart() {
    userCtx.hideCart();
  }

  const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price;
  }, 0);
  return (
    <Modal className="cart" open={userCtx.progress === "cart"}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly={true} onClick={handleCloseCart}>
          Close
        </Button>
        <Button onClick={handleCloseCart}>Go to checkout</Button>
      </p>
    </Modal>
  );
}
