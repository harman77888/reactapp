
import { useContext } from "react";
import CartContext from "../context/CartContext";

function Navbar() {
  const {cart}=useContext(CartContext);

  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>MyStore</h2>

      <div style={styles.links}>
        <a style={{color:'white',textDecoration:'none'}}  href="/">Home</a>
        <a  style={{color:'white',textDecoration:'none'}} href="/about">About</a>
        <a  style={{color:'white',textDecoration:'none'}} href="/products">Products</a>

        <span style={styles.cart}>
          🛒 Cart ({cart})
        </span>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#1e293b",
    color: "white",
  },
  logo: {
    margin: 0,
  },
  links: {
    display: "flex",
    alignItems: "center",
    gap: "25px",
  },
  cart: {
    backgroundColor: "#2563eb",
    padding: "10px 15px",
    borderRadius: "8px",
  },
};

export default Navbar;
