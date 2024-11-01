import logoImg from "../assets/logo.jpg";
import Button from "../UI/Button";
import { useContext } from "react";
import CartContext from "../store/cartContext";
import UserProgressContext from "../store/userProgressContext";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNoOfItems, item) => {
    return totalNoOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="Food" />
        <h1>Food Ordering App</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
