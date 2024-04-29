import CartList from "@/components/CartList";
import Title, { TitleSize } from "@/components/Title";

const Cart = () => {
  return (
    <>
      <Title size={TitleSize.l}>Cart</Title>
      <CartList />
    </>
  );
};

export default Cart;
