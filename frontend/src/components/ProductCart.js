import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const isLoggedIn = false; // Replace with actual auth logic

  const handleCheckout = () => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      alert("Proceeding to checkout");
    }
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}

export default Cart;