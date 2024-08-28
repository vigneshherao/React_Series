import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "./utils/cartSlice";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((store) => store?.cart?.item);

  return (
    <div className="App">
      <h2>Cart value : {count}</h2>

      <button onClick={() => dispatch(addToCart())}>Add to cart </button>
      <button onClick={() => dispatch(removeFromCart())}>
        Remove from cart{" "}
      </button>
    </div>
  );
}

export default App;
